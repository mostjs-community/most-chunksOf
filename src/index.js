/** @license MIT License (c) copyright 2016 original author or authors */

import { FullBufferSink, PartialBufferSink } from './BufferSinks'

const chunksStream = (n, stream, constr) => new stream.constructor({
    run: (sink, scheduler) => stream.source.run(new constr(n, sink), scheduler)
})

export const chunksOf = (n, stream) => chunksStream(n, stream, FullBufferSink)
export const chunkEvery = (n, stream) => chunksStream(n, stream, PartialBufferSink)
