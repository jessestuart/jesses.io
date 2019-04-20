import Promise from 'bluebird'

export class Cancelable {
  public cancelled: boolean
  public promise: Promise<any>

  constructor(promise: Promise<any>) {
    this.cancelled = false
    this.promise = new Promise((resolve, reject) => {
      promise.then(
        // eslint-disable-next-line prefer-promise-reject-errors
        val => (this.cancelled ? reject() : resolve(val)),
        error => reject(error),
      )
    })
  }

  public async then(cb: () => any) {
    return this.promise.then(cb)
  }

  public cancel() {
    this.cancelled = true
    this.promise.cancel()
  }
}
