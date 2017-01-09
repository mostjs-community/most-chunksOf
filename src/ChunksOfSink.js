export class ChunksOfSink {
  constructor (n, sink) {
    this.n = n
    this.sink = sink
    this.xs = new Array(this.n)
    this.length = 0
  }

  event (time, value) {
    this.xs[this.length++] = value

    if (this.n === this.length) {
      const chunk = this.xs
      this.xs = new Array(this.n)
      this.length = 0
      this.sink.event(time, chunk)
    }
  }

  error (time, err) {
    return this.sink.error(time, err)
  }

  end (time, value) {
    if (this.length > 0) {
      this.sink.event(time, this.xs)
    }
    return this.sink.end(time, value)
  }
}
