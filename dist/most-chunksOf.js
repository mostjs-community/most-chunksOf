(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@most/prelude')) :
    typeof define === 'function' && define.amd ? define(['exports', '@most/prelude'], factory) :
    (factory((global['most-chunksOf'] = global['most-chunksOf'] || {}),global._most_prelude));
}(this, (function (exports,_most_prelude) { 'use strict';

var FullBufferSink = function FullBufferSink(n, sink) {
    this.n = n;
    this.sink = sink;
    this.xs = [];
};
FullBufferSink.prototype.event = function event (time, value) {
    var sink = this.sink;
    this.xs.push(value);
    if (this.n === this.xs.length) {
        var list = this.xs;
        this.xs = [];
        return sink.event(time, list)
    }
};
FullBufferSink.prototype.error = function error (time, err) {
    return this.sink.error(time, err)
};
FullBufferSink.prototype.end = function end (time, value) {
    if (this.xs.length > 0) {
        this.sink.event(time, this.xs);
    }
    return this.sink.end(time, value)
};

/** @license MIT License (c) copyright 2016 original author or authors */

var chunksStream = function (n, stream, constr) { return new stream.constructor({
    run: function (sink, scheduler) { return stream.source.run(new constr(n, sink), scheduler); }
}); };

var chunksOf = _most_prelude.curry2(function (n, stream) { return chunksStream(n, stream, FullBufferSink); });

exports.chunksOf = chunksOf;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=most-chunksOf.js.map
