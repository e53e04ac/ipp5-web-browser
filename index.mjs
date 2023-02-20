/*!
    @e53e04ac/ipp5-web-browser/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { default as playwright } from 'playwright';

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').Ipp5WebBrowser.Constructor} */
const constructor = ((options) => {

    const _options = ({
        workspaceDirectory: hold(() => {
            return unwrap(options.workspaceDirectory);
        }),
        chromiumSandbox: hold(() => {
            return unwrap(options.chromiumSandbox);
        }),
        headless: hold(() => {
            return unwrap(options.headless);
        }),
        ignoreHTTPSErrors: hold(() => {
            return unwrap(options.ignoreHTTPSErrors);
        }),
        timeout: hold(() => {
            return unwrap(options.timeout);
        }),
        viewport: hold(() => {
            return unwrap(options.viewport);
        }),
    });

    /** @type {import('.').Ipp5WebBrowser._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        userDataDirectory: hold(() => {
            return _options.workspaceDirectory().resolve('userData');
        }),
        downloadsDirectory: hold(() => {
            return _options.workspaceDirectory().resolve('downloads');
        }),
        tracesDirectory: hold(() => {
            return _options.workspaceDirectory().resolve('traces');
        }),
    });

    /** @type {import('.').Ipp5WebBrowser.Self} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5WebBrowser: (() => {
            return _self;
        }),
        browserContext: hold(async () => {
            return await playwright.chromium.launchPersistentContext(_self.userDataDirectory().path(), {
                acceptDownloads: true,
                args: ['--disable-gpu'],
                baseURL: undefined,
                bypassCSP: false,
                channel: undefined,
                chromiumSandbox: _options.chromiumSandbox(),
                colorScheme: 'light',
                deviceScaleFactor: undefined,
                devtools: false,
                downloadsPath: _self.downloadsDirectory().path(),
                env: {},
                executablePath: undefined,
                extraHTTPHeaders: undefined,
                forcedColors: 'none',
                geolocation: undefined,
                handleSIGHUP: true,
                handleSIGINT: true,
                handleSIGTERM: true,
                hasTouch: false,
                headless: _options.headless(),
                httpCredentials: undefined,
                ignoreDefaultArgs: false,
                ignoreHTTPSErrors: _options.ignoreHTTPSErrors(),
                isMobile: false,
                javaScriptEnabled: true,
                locale: undefined,
                logger: undefined,
                offline: false,
                permissions: undefined,
                proxy: undefined,
                recordHar: undefined,
                recordVideo: undefined,
                reducedMotion: 'no-preference',
                screen: undefined,
                serviceWorkers: 'allow',
                slowMo: undefined,
                strictSelectors: undefined,
                timeout: _options.timeout(),
                timezoneId: undefined,
                tracesDir: _self.tracesDirectory().path(),
                userAgent: undefined,
                viewport: _options.viewport(),
            });
        }),
        request: (async ({ page, requestData }) => {
            const requestDataEncoded = ({
                method: requestData.method,
                url: requestData.url,
                headers: requestData.headers,
                body: requestData.body?.toString('base64') ?? '',
            });
            const { responseDataEncoded } = await page.evaluate(async ({ requestDataEncoded }) => {
                const requestMethod = requestDataEncoded.method;
                const requestUrl = requestDataEncoded.url;
                const requestHeaders = requestDataEncoded.headers;
                const requestBodyBase64 = requestDataEncoded.body;
                const requestBody = new Uint8Array(window.atob(requestBodyBase64).split('').map((x) => x.charCodeAt(0)));
                const response = await window.fetch(requestUrl, {
                    method: requestMethod,
                    headers: { ...requestHeaders },
                    body: requestBody.length > 0 ? requestBody : null,
                });
                const responseStatus = response.status;
                const responseStatusText = response.statusText;
                /** @type {Record<string, string>} */
                const responseHeaders = {};
                response.headers.forEach((value, key) => {
                    responseHeaders[key] = value;
                });
                const responseBody = await response.arrayBuffer();
                const responseBodyBase64 = window.btoa(String.fromCharCode.apply(null, [...new Uint8Array(responseBody)]));
                return {
                    responseDataEncoded: {
                        status: responseStatus,
                        statusText: responseStatusText,
                        headers: responseHeaders,
                        body: responseBodyBase64,
                    },
                };
            }, { requestDataEncoded });
            const responseData = ({
                status: responseDataEncoded.status,
                statusText: responseDataEncoded.statusText,
                headers: responseDataEncoded.headers,
                body: Buffer.from(responseDataEncoded.body, 'base64'),
            });
            return { responseData };
        }),
        close: hold(async () => {
            const browserContext = await self.browserContext();
            await browserContext.close();
        }),
    });

    return self;

});

/** @type {import('.').Ipp5WebBrowser.Companion} */
const companion = ({});

/** @type {import('.').Ipp5WebBrowser.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5WebBrowser };
