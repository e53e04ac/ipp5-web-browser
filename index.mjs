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
        Tracer: (() => {
            /** @type {import('.').Ipp5WebBrowser.Tracer.Self} */
            const it = ({
                _inputs: new Map(),
                _outputs: new Map(),
                _transformers: [
                    {
                        test: ((x) => typeof x === 'undefined'),
                        transform: (async (x) => ({
                            type: 'undefined', data: x,
                        })),
                    },
                    {
                        test: ((x) => typeof x === 'boolean'),
                        transform: (async (x) => ({
                            type: 'boolean', data: x,
                        })),
                    },
                    {
                        test: ((x) => typeof x === 'number'),
                        transform: (async (x) => ({
                            type: 'number', data: x,
                        })),
                    },
                    {
                        test: ((x) => typeof x === 'bigint'),
                        transform: (async (x) => ({
                            type: 'bigint', data: x.toString(),
                        })),
                    },
                    {
                        test: ((x) => typeof x === 'string'),
                        transform: (async (x) => ({
                            type: 'string', data: x,
                        })),
                    },
                    {
                        test: ((x) => x === null),
                        transform: (async (x) => ({
                            type: 'null', data: x,
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Error'),
                        transform: (async (x) => ({
                            type: 'Error', data: {
                                cause:
                                    x.cause,
                                message:
                                    x.message,
                                name:
                                    x.name,
                                stack:
                                    x.stack,
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Buffer'),
                        transform: (async (x) => ({
                            type: 'Buffer', data: {
                                base64:
                                    x.toString('base64'),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Browser'),
                        transform: (async (x) => ({
                            type: 'Browser',
                            data: {
                                browserType:
                                    await it._transform(() => x.browserType()),
                                contexts:
                                    await it._transform(() => x.contexts()),
                                isConnected:
                                    await it._transform(() => x.isConnected()),
                                version:
                                    await it._transform(() => x.version()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'BrowserContext'),
                        transform: (async (x) => ({
                            type: 'BrowserContext',
                            data: {
                                backgroundPages:
                                    await it._transform(() => x.backgroundPages()),
                                browser:
                                    await it._transform(() => x.browser()),
                                pages:
                                    await it._transform(() => x.pages()),
                                serviceWorkers:
                                    await it._transform(() => x.serviceWorkers()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'BrowserType'),
                        transform: (async (x) => ({
                            type: 'BrowserType',
                            data: {
                                executablePath:
                                    await it._transform(() => x.executablePath()),
                                name:
                                    await it._transform(() => x.name()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'ElementHandle'),
                        transform: (async (x) => ({
                            type: 'ElementHandle',
                            data: {
                                boundingBox:
                                    await it._transform(() => x.boundingBox()),
                                contentFrame:
                                    await it._transform(() => x.contentFrame()),
                                innerHTML:
                                    await it._transform(() => x.innerHTML()),
                                innerText:
                                    await it._transform(() => x.innerText()),
                                isChecked:
                                    await it._transform(() => x.isChecked()),
                                isDisabled:
                                    await it._transform(() => x.isDisabled()),
                                isEditable:
                                    await it._transform(() => x.isEditable()),
                                isEnabled:
                                    await it._transform(() => x.isEnabled()),
                                isHidden:
                                    await it._transform(() => x.isHidden()),
                                isVisible:
                                    await it._transform(() => x.isVisible()),
                                ownerFrame:
                                    await it._transform(() => x.ownerFrame()),
                                screenshot:
                                    await it._transform(() => x.screenshot()),
                                textContent:
                                    await it._transform(() => x.textContent()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Frame'),
                        transform: (async (x) => ({
                            type: 'Frame',
                            data: {
                                childFrames:
                                    await it._transform(() => x.childFrames()),
                                content:
                                    await it._transform(() => x.content()),
                                frameElement:
                                    await it._transform(() => x.frameElement()),
                                isDetached:
                                    await it._transform(() => x.isDetached()),
                                name:
                                    await it._transform(() => x.name()),
                                page:
                                    await it._transform(() => x.page()),
                                parentFrame:
                                    await it._transform(() => x.parentFrame()),
                                title:
                                    await it._transform(() => x.title()),
                                url:
                                    await it._transform(() => x.url()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Page'),
                        transform: (async (x) => ({
                            type: 'Page',
                            data: {
                                content:
                                    await it._transform(() => x.content()),
                                context:
                                    await it._transform(() => x.context()),
                                frames:
                                    await it._transform(() => x.frames()),
                                isClosed:
                                    await it._transform(() => x.isClosed()),
                                mainFrame:
                                    await it._transform(() => x.mainFrame()),
                                opener:
                                    await it._transform(() => x.opener()),
                                pdf:
                                    await it._transform(() => x.pdf()),
                                screenshot:
                                    await it._transform(() => x.screenshot()),
                                title:
                                    await it._transform(() => x.title()),
                                url:
                                    await it._transform(() => x.url()),
                                video:
                                    await it._transform(() => x.video()),
                                viewportSize:
                                    await it._transform(() => x.viewportSize()),
                                workers:
                                    await it._transform(() => x.workers()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Request'),
                        transform: (async (x) => ({
                            type: 'Request',
                            data: {
                                allHeaders:
                                    await it._transform(() => x.allHeaders()),
                                failure:
                                    await it._transform(() => x.failure()),
                                frame:
                                    await it._transform(() => x.frame()),
                                headers:
                                    await it._transform(() => x.headers()),
                                headersArray:
                                    await it._transform(() => x.headersArray()),
                                isNavigationRequest:
                                    await it._transform(() => x.isNavigationRequest()),
                                method:
                                    await it._transform(() => x.method()),
                                postData:
                                    await it._transform(() => x.postData()),
                                postDataBuffer:
                                    await it._transform(() => x.postDataBuffer()),
                                postDataJSON:
                                    await it._transform(() => x.postDataJSON()),
                                redirectedFrom:
                                    await it._transform(() => x.redirectedFrom()),
                                redirectedTo:
                                    await it._transform(() => x.redirectedTo()),
                                resourceType:
                                    await it._transform(() => x.resourceType()),
                                response:
                                    await it._transform(() => x.response()),
                                serviceWorker:
                                    await it._transform(() => x.serviceWorker()),
                                sizes:
                                    await it._transform(() => x.sizes()),
                                timing:
                                    await it._transform(() => x.timing()),
                                url:
                                    await it._transform(() => x.url()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Response'),
                        transform: (async (x) => ({
                            type: 'Response',
                            data: {
                                allHeaders:
                                    await it._transform(() => x.allHeaders()),
                                body:
                                    await it._transform(() => x.body()),
                                finished:
                                    await it._transform(() => x.finished()),
                                frame:
                                    await it._transform(() => x.frame()),
                                fromServiceWorker:
                                    await it._transform(() => x.fromServiceWorker()),
                                headers:
                                    await it._transform(() => x.headers()),
                                headersArray:
                                    await it._transform(() => x.headersArray()),
                                json:
                                    await it._transform(() => x.json()),
                                ok:
                                    await it._transform(() => x.ok()),
                                request:
                                    await it._transform(() => x.request()),
                                securityDetails:
                                    await it._transform(() => x.securityDetails()),
                                serverAddr:
                                    await it._transform(() => x.serverAddr()),
                                status:
                                    await it._transform(() => x.status()),
                                statusText:
                                    await it._transform(() => x.statusText()),
                                text:
                                    await it._transform(() => x.text()),
                                url:
                                    await it._transform(() => x.url()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Video'),
                        transform: (async (x) => ({
                            type: 'Video',
                            data: {
                                path:
                                    await it._transform(() => x.path()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Worker'),
                        transform: (async (x) => ({
                            type: 'Worker',
                            data: {
                                url:
                                    await it._transform(() => x.url()),
                            },
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Array'),
                        transform: (async (x, options) => ({
                            type: 'Array',
                            data: await Promise.all(x.map((value) => {
                                return it._transform(() => value);
                            }))
                        })),
                    },
                    {
                        test: ((x) => x?.constructor?.name === 'Object'),
                        transform: (async (x, options) => ({
                            type: 'Record',
                            data: await Promise.all(Object.entries(x).map(([key, value]) => {
                                return it._transform(() => value).then((value) => {
                                    return [key, value];
                                });
                            })).then((entries) => {
                                return Object.fromEntries(entries);
                            }),
                        })),
                    },
                    {
                        test: ((x) => true),
                        transform: (async (x) => ({
                            type: 'unknown',
                            data: {
                                name: (x?.constructor?.name ?? null),
                            },
                        })),
                    },
                ],
                _transformer: ((x) => {
                    for (const transformer of it._transformers) {
                        if (transformer.test(x)) {
                            return transformer;
                        }
                    }
                    throw new Error();
                }),
                _transform: (async (f, options) => {
                    const { error, value } = await (async () => f())().then((value) => {
                        return { error: undefined, value };
                    }, (error) => {
                        return { error, value: undefined };
                    });
                    if (error != null) {
                        return await it._transformer(error).transform(error);
                    }
                    if (options?.passthrough === true) {
                        return value;
                    }
                    {
                        const id = it._inputs.get(value);
                        if (id != null) {
                            return { id };
                        }
                    }
                    {
                        const id = it._inputs.size;
                        it._inputs.set(value, id);
                        const { type, data } = await it._transformer(value).transform(value, options);
                        it._outputs.set(id, { id, type, data });
                        return { id };
                    }
                }),
                trace: (async (x) => {
                    await it._transform(() => x);
                }),
                result: (async () => {
                    return {
                        values: Array.from(it._outputs.values()).sort((a, b) => {
                            return (a.id - b.id);
                        }),
                    };
                }),
            });
            return it;
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
        snapshot: (async ({ }) => {
            const browserContext = await self.browserContext();
            const tracer = await _self.Tracer();
            await tracer.trace(browserContext);
            return await tracer.result();
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
