/*!
    @e53e04ac/ipp5-web-browser/tracer.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';

/** @type {import('./tracer').Tracer.Constructor} */
const constructor = ((options) => {

    const _options = ({});

    /** @type {import('./tracer').Tracer._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        inputs: new Map(),
        outputs: new Map(),
        transformers: [
            {
                test: ((x) => typeof x === 'undefined'),
                transform: (async (x) => ({
                    type: 'undefined',
                    data: x,
                })),
            },
            {
                test: ((x) => typeof x === 'boolean'),
                transform: (async (x) => ({
                    type: 'boolean',
                    data: x,
                })),
            },
            {
                test: ((x) => typeof x === 'number'),
                transform: (async (x) => ({
                    type: 'number',
                    data: x,
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
                    type: 'string',
                    data: x,
                })),
            },
            {
                test: ((x) => x === null),
                transform: (async (x) => ({
                    type: 'null',
                    data: x,
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Error'),
                transform: (async (x) => ({
                    type: 'Error',
                    data: {
                        cause: x.cause,
                        message: x.message,
                        name: x.name,
                        stack: x.stack,
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Buffer'),
                transform: (async (x) => ({
                    type: 'Buffer',
                    data: {
                        base64: x.toString('base64'),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Browser'),
                transform: (async (x) => ({
                    type: 'Browser',
                    data: {
                        browserType: await _self.transform(() => x.browserType()),
                        contexts: await _self.transform(() => x.contexts()),
                        isConnected: await _self.transform(() => x.isConnected()),
                        version: await _self.transform(() => x.version()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'BrowserContext'),
                transform: (async (x) => ({
                    type: 'BrowserContext',
                    data: {
                        backgroundPages: await _self.transform(() => x.backgroundPages()),
                        browser: await _self.transform(() => x.browser()),
                        pages: await _self.transform(() => x.pages()),
                        serviceWorkers: await _self.transform(() => x.serviceWorkers()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'BrowserType'),
                transform: (async (x) => ({
                    type: 'BrowserType',
                    data: {
                        executablePath: await _self.transform(() => x.executablePath()),
                        name: await _self.transform(() => x.name()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'ElementHandle'),
                transform: (async (x) => ({
                    type: 'ElementHandle',
                    data: {
                        boundingBox: await _self.transform(() => x.boundingBox()),
                        contentFrame: await _self.transform(() => x.contentFrame()),
                        innerHTML: await _self.transform(() => x.innerHTML()),
                        innerText: await _self.transform(() => x.innerText()),
                        isChecked: await _self.transform(() => x.isChecked()),
                        isDisabled: await _self.transform(() => x.isDisabled()),
                        isEditable: await _self.transform(() => x.isEditable()),
                        isEnabled: await _self.transform(() => x.isEnabled()),
                        isHidden: await _self.transform(() => x.isHidden()),
                        isVisible: await _self.transform(() => x.isVisible()),
                        ownerFrame: await _self.transform(() => x.ownerFrame()),
                        screenshot: await _self.transform(() => x.screenshot()),
                        textContent: await _self.transform(() => x.textContent()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Frame'),
                transform: (async (x) => ({
                    type: 'Frame',
                    data: {
                        childFrames: await _self.transform(() => x.childFrames()),
                        content: await _self.transform(() => x.content()),
                        frameElement: await _self.transform(() => x.frameElement()),
                        isDetached: await _self.transform(() => x.isDetached()),
                        name: await _self.transform(() => x.name()),
                        page: await _self.transform(() => x.page()),
                        parentFrame: await _self.transform(() => x.parentFrame()),
                        title: await _self.transform(() => x.title()),
                        url: await _self.transform(() => x.url()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Page'),
                transform: (async (x) => ({
                    type: 'Page',
                    data: {
                        content: await _self.transform(() => x.content()),
                        context: await _self.transform(() => x.context()),
                        frames: await _self.transform(() => x.frames()),
                        isClosed: await _self.transform(() => x.isClosed()),
                        mainFrame: await _self.transform(() => x.mainFrame()),
                        opener: await _self.transform(() => x.opener()),
                        pdf: await _self.transform(() => x.pdf()),
                        screenshot: await _self.transform(() => x.screenshot()),
                        title: await _self.transform(() => x.title()),
                        url: await _self.transform(() => x.url()),
                        video: await _self.transform(() => x.video()),
                        viewportSize: await _self.transform(() => x.viewportSize()),
                        workers: await _self.transform(() => x.workers()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Request'),
                transform: (async (x) => ({
                    type: 'Request',
                    data: {
                        allHeaders: await _self.transform(() => x.allHeaders()),
                        failure: await _self.transform(() => x.failure()),
                        frame: await _self.transform(() => x.frame()),
                        headers: await _self.transform(() => x.headers()),
                        headersArray: await _self.transform(() => x.headersArray()),
                        isNavigationRequest: await _self.transform(() => x.isNavigationRequest()),
                        method: await _self.transform(() => x.method()),
                        postData: await _self.transform(() => x.postData()),
                        postDataBuffer: await _self.transform(() => x.postDataBuffer()),
                        postDataJSON: await _self.transform(() => x.postDataJSON()),
                        redirectedFrom: await _self.transform(() => x.redirectedFrom()),
                        redirectedTo: await _self.transform(() => x.redirectedTo()),
                        resourceType: await _self.transform(() => x.resourceType()),
                        response: await _self.transform(() => x.response()),
                        serviceWorker: await _self.transform(() => x.serviceWorker()),
                        sizes: await _self.transform(() => x.sizes()),
                        timing: await _self.transform(() => x.timing()),
                        url: await _self.transform(() => x.url()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Response'),
                transform: (async (x) => ({
                    type: 'Response',
                    data: {
                        allHeaders: await _self.transform(() => x.allHeaders()),
                        body: await _self.transform(() => x.body()),
                        finished: await _self.transform(() => x.finished()),
                        frame: await _self.transform(() => x.frame()),
                        fromServiceWorker: await _self.transform(() => x.fromServiceWorker()),
                        headers: await _self.transform(() => x.headers()),
                        headersArray: await _self.transform(() => x.headersArray()),
                        json: await _self.transform(() => x.json()),
                        ok: await _self.transform(() => x.ok()),
                        request: await _self.transform(() => x.request()),
                        securityDetails: await _self.transform(() => x.securityDetails()),
                        serverAddr: await _self.transform(() => x.serverAddr()),
                        status: await _self.transform(() => x.status()),
                        statusText: await _self.transform(() => x.statusText()),
                        text: await _self.transform(() => x.text()),
                        url: await _self.transform(() => x.url()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Video'),
                transform: (async (x) => ({
                    type: 'Video',
                    data: {
                        path: await _self.transform(() => x.path()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Worker'),
                transform: (async (x) => ({
                    type: 'Worker',
                    data: {
                        url: await _self.transform(() => x.url()),
                    },
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Array'),
                transform: (async (x, options) => ({
                    type: 'Array',
                    data: await Promise.all(x.map((value) => {
                        return _self.transform(() => value);
                    }))
                })),
            },
            {
                test: ((x) => x?.constructor?.name === 'Object'),
                transform: (async (x, options) => ({
                    type: 'Record',
                    data: await Promise.all(Object.entries(x).map(([key, value]) => {
                        return _self.transform(() => value).then((value) => {
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
        transformer: ((x) => {
            for (const transformer of _self.transformers) {
                if (transformer.test(x)) {
                    return transformer;
                }
            }
            throw new Error();
        }),
        transform: (async (f, options) => {
            const { error, value } = await (async () => f())().then((value) => {
                return { error: undefined, value };
            }, (error) => {
                return { error, value: undefined };
            });
            if (error != null) {
                return await _self.transformer(error).transform(error);
            }
            if (options?.passthrough === true) {
                return value;
            }
            {
                const id = _self.inputs.get(value);
                if (id != null) {
                    return { id };
                }
            }
            {
                const id = _self.inputs.size;
                _self.inputs.set(value, id);
                const { type, data } = await _self.transformer(value).transform(value, options);
                _self.outputs.set(id, { id, type, data });
                return { id };
            }
        }),
    });

    /** @type {import('./tracer').Tracer.Self} */
    const self = ({
        ...EventEmitter({}),
        _Tracer: (() => {
            return _self;
        }),
        trace: (async (x) => {
            await _self.transform(() => x);
        }),
        result: (async () => {
            return {
                values: Array.from(_self.outputs.values()).sort((a, b) => {
                    return (a.id - b.id);
                }),
            };
        }),
    });

    return self;

});

/** @type {import('./tracer').Tracer.Companion} */
const companion = ({});

/** @type {import('./tracer').Tracer.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Tracer };
