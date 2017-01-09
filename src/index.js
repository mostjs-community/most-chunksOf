/** @license MIT License (c) copyright 2016 original author or authors */

import { FullBufferSink } from './BufferSinks'

const chunksStream = (n, stream, constr) => new stream.constructor({
    run: (sink, scheduler) => stream.source.run(new constr(n, sink), scheduler)
})

export const chunksOf = (n, stream) => chunksStream(n, stream, FullBufferSink)
