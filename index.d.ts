/*!
    @e53e04ac/ipp5-web-browser/index.d.ts
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

import { FileEntry } from 'file-entry';
import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace Ipp5WebBrowser {

    namespace Tracer {

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

        type Self = {
            readonly _inputs: Map<unknown, number>;
            readonly _outputs: Map<number, {
                readonly id: number;
                readonly type: string;
                readonly data: unknown;
            }>;
            readonly _transformers: [
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
            readonly _transformer: {
                (x: unknown): Transformer<any>;
            };
            readonly _transform: {
                (f: { (): unknown; }, options?: TransformOptions): Promise<unknown>;
            };
            readonly trace: {
                (target: unknown): Promise<void>;
            };
            readonly result: {
                (): Promise<unknown>;
            };
        };

    }

    type HttpRequestData = {
        readonly method: string;
        readonly url: string;
        readonly headers: Record<string, string>;
        readonly body: null | Buffer;
    };

    type HttpResponseData = {
        readonly status: number;
        readonly statusText: string;
        readonly headers: Record<string, string>;
        readonly body: null | Buffer;
    };

    type Options = {
        readonly workspaceDirectory: ValueOrGet<FileEntry>;
        readonly chromiumSandbox: ValueOrGet<boolean>;
        readonly headless: ValueOrGet<boolean>;
        readonly ignoreHTTPSErrors: ValueOrGet<boolean>;
        readonly timeout: ValueOrGet<number>;
        readonly viewport: ValueOrGet<null | {
            readonly width: number;
            readonly height: number;
        }>;
    };

    type EventSpecs = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly userDataDirectory: Get<FileEntry>;
        readonly downloadsDirectory: Get<FileEntry>;
        readonly tracesDirectory: Get<FileEntry>;
        readonly Tracer: {
            (): Tracer.Self;
        };
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5WebBrowser: Get<_Self>;
        readonly browserContext: Get<Promise<PlaywrightBrowserContext>>;
        readonly request: {
            (params: {
                readonly page: PlaywrightPage;
                readonly requestData: HttpRequestData;
            }): Promise<{
                readonly responseData: HttpResponseData;
            }>;
        };
        readonly snapshot: {
            (params: {

            }): Promise<unknown>;
        };
        readonly close: Get<Promise<void>>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5WebBrowser = Ipp5WebBrowser.Self;

export declare const Ipp5WebBrowser: Ipp5WebBrowser.ConstructorWithCompanion;
