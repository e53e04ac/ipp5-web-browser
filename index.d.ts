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
