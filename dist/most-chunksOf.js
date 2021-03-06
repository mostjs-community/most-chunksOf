(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@most/prelude')) :
	typeof define === 'function' && define.amd ? define(['exports', '@most/prelude'], factory) :
	(factory((global['most-chunksOf'] = {}),global._most_prelude));
}(this, (function (exports,_most_prelude) { 'use strict';

var ChunksOfSink = function ChunksOfSink (n, sink) {
  this.n = n;
  this.sink = sink;
  this.xs = new Array(this.n);
  this.length = 0;
};

ChunksOfSink.prototype.event = function event (time, value) {
  this.xs[this.length++] = value;

  if (this.n === this.length) {
    var chunk = this.xs;
    this.xs = new Array(this.n);
    this.length = 0;
    this.sink.event(time, chunk);
  }
};

ChunksOfSink.prototype.error = function error (time, err) {
  return this.sink.error(time, err)
};

ChunksOfSink.prototype.end = function end (time, value) {
  if (this.length > 0) {
    this.sink.event(time, this.xs);
  }
  return this.sink.end(time, value)
};

/** @license MIT License (c) copyright 2016 original author or authors */

var chunksOfStream = function (n, stream) { return new stream.constructor({
  run: function (sink, scheduler) { return stream.source.run(new ChunksOfSink(n, sink), scheduler); }
}); };

var chunksOf = _most_prelude.curry2(chunksOfStream);

exports.chunksOf = chunksOf;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=most-chunksOf.js.map
