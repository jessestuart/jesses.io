import Promise from 'bluebird'

export class Cancelable {
  public cancelled: boolean
  public promise: Promise<any>

  constructor(promise: Promise<any>) {
    this.cancelled = false
    this.promise = new Promise((resolve, reject) => {
      if (!this.cancelled) {
        return promise.then(resolve, reject)
      }
      return Promise.resolve()
    })
  }

  public then(cb: () => any) {
    if (!this.cancelled) {
      return Promise.resolve(this.promise.then(cb))
    }
    return Promise.resolve()
  }

  public cancel() {
    this.cancelled = true
  }
}
