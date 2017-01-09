/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'

import { from, reduce } from 'most'
import { chunksOf } from '../src/index'

describe('most-chunksOf', () => {
  it('should create chunks of size n', () => {
    const chunkSize = 10
    const a = Array.from(Array(chunkSize * 10)).map((_, i) => i)

    const s = chunksOf(chunkSize, from(a))
    return reduce((b, chunk) => b.concat(chunk), [], s)
      .then(b => assert.deepEqual(a, b))
  })

  it('should include trailing events', () => {
    const chunkSize = 10
    const extra = chunkSize - 1
    const a = Array.from(Array((chunkSize * 10) + extra)).map((_, i) => i)

    const s = chunksOf(chunkSize, from(a))
    return reduce((b, chunk) => b.concat(chunk), [], s)
      .then(b => assert.deepEqual(a, b))
  })
})
