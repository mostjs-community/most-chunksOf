# most-chunksOf

Splits a list into length-n pieces akin to `bufferWithCount`, `batch`, `splitEvery`

## Install

```shell
npm install most-chunksof
```

## API

### chunksOf 

Split a list based on the supplied `n` argument

```js
import { chunksOf } from 'most-chunksOf'
import { from as fromArray, observe } from 'most'

const log = console.log
const xs = fromArray([1,2,3,4,5,6,7])
observe(log, chunksOf(3, xs))
/*
[1,2,3]
[4,5,6]
[7]
*/

// if you want to ignore uneven or tail chunks
const chunkEvery = (n, stream) => chunksOf(n, stream).filter(xs => xs.length === n)
const xs = fromArray([1,2,3,4,5,6,7])
observe(log, chunkEvery(3, xs))
/*
[1,2,3]
[4,5,6]
*/
```

## Made with

[@most/package-starter](https://github.com/mostjs/package-starter)
