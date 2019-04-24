import Promise from 'bluebird'

export class Cancelable {
  public cancelled: boolean
  public promise: Promise<any>

  constructor(promise: Promise<any>) {
    this.cancelled = false
    this.promise = new Promise((resolve, reject) => {
      if (!this.cancelled) {
        return promise.then(
          val => (this.cancelled ? resolve() : resolve(val)),
          error => reject(error),
        )
      }
      return Promise.resolve()
    })
  }

  public async then(cb: () => any) {
    if (!this.cancelled) {
      return this.promise.then(cb)
    }
  }

  public cancel() {
    this.cancelled = true
  }
}
