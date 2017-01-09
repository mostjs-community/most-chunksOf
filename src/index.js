/** @license MIT License (c) copyright 2016 original author or authors */

import { ChunksOfSink } from './ChunksOfSink'
import { curry2 } from '@most/prelude'

const chunksOfStream = (n, stream) => new stream.constructor({
  run: (sink, scheduler) => stream.source.run(new ChunksOfSink(n, sink), scheduler)
})

export const chunksOf = curry2(chunksOfStream)
