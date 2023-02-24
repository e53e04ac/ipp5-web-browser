/*!
    @e53e04ac/ipp5-web-browser/tracer.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Browser as PlaywrightBrowser } from 'playwright';
import { BrowserContext as PlaywrightBrowserContext } from 'playwright';
import { BrowserType as PlaywrightBrowserType } from 'playwright';
import { ElementHandle as PlaywrightElementHandle } from 'playwright';
import { Frame as PlaywrightFrame } from 'playwright';
import { Page as PlaywrightPage } from 'playwright';
import { Request as PlaywrightRequest } from 'playwright';
import { Response as PlaywrightResponse } from 'playwright';
import { Video as PlaywrightVideo } from 'playwright';
import { Worker as PlaywrightWorker } from 'playwright';

import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';

export declare namespace Tracer {

    type TransformOptions = {
        readonly passthrough?: boolean;
    };

    type TransformOutput = {
        readonly type: string;
        readonly data: unknown;
    };

    type Transformer<T> = {
        readonly test: {
            (x: unknown): boolean;
        };
        readonly transform: {
            (x: T, options?: TransformOptions): Promise<TransformOutput>;
        };
    };

    type Options = Record<never, never>;

    type EventSpecs = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly inputs: Map<unknown, number>;
        readonly outputs: Map<number, {
            readonly id: number;
            readonly type: string;
            readonly data: unknown;
        }>;
        readonly transformers: [
            Transformer<undefined>,
            Transformer<boolean>,
            Transformer<number>,
            Transformer<bigint>,
            Transformer<string>,
            Transformer<null>,
            Transformer<Error>,
            Transformer<Buffer>,
            Transformer<PlaywrightBrowser>,
            Transformer<PlaywrightBrowserContext>,
            Transformer<PlaywrightBrowserType>,
            Transformer<PlaywrightElementHandle>,
            Transformer<PlaywrightFrame>,
            Transformer<PlaywrightPage>,
            Transformer<PlaywrightRequest>,
            Transformer<PlaywrightResponse>,
            Transformer<PlaywrightVideo>,
            Transformer<PlaywrightWorker>,
            Transformer<Array<unknown>>,
            Transformer<Record<string, unknown>>,
            Transformer<unknown>,
        ];
        readonly transformer: {
            (x: unknown): Transformer<any>;
        };
        readonly transform: {
            (f: { (): unknown; }, options?: TransformOptions): Promise<unknown>;
        };
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Tracer: Get<_Self>;
        readonly trace: {
            (target: unknown): Promise<void>;
        };
        readonly result: {
            (): Promise<unknown>;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Tracer = Tracer.Self;

export declare const Tracer: Tracer.ConstructorWithCompanion;
