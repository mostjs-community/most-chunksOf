# most-chunksOf

Splits a list into length-n pieces akin to `bufferWithCount`, `batch`, `splitEvery`

## Install

```shell
npm install most-chunksOf
```

## API

### chunksOf 

will include chunks even if `n` does not divide evenly

```js
import { chunksOf, chunkEvery } from 'most-chunksOf'
import { from as fromArray, observe } from 'most'

const log = console.log
const xs = fromArray([1,2,3,4,5,6,7])
observe(log, chunksOf(3, xs))
/*
[1,2,3]
[4,5,6]
[7]
*/
```

### chunkEvery 

will potential lose chunks if not within `n`

```js
observe(log, chunkEvery(3, xs)) // does *not* produce extra chunks
/*
[1,2,3]
[4,5,6]
*/

```

## Made with

[@most/package-starter](https://github.com/mostjs/package-starter)
