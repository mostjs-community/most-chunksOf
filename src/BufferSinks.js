export class FullBufferSink {
    constructor(n, sink) {
        this.n = n
        this.sink = sink
        this.xs = []
    }
    event(time, value) {
        const sink = this.sink
        this.xs.push(value)
        if (this.n === this.xs.length) {
            let list = this.xs
            this.xs = []
            return sink.event(time, list)
        }
    }
    error(time, err) {
        return this.sink.error(time, err)
    }
    end(time, value) {
        if (this.xs.length > 0) {
            this.sink.event(time, this.xs)
        }
        return this.sink.end(time, value)
    }
}

export class PartialBufferSink extends FullBufferSink {
    end(time, value) {
        return this.sink.end(time, value)
    }
}
