import Promise from 'bluebird'

export class Cancelable {
  public cancelled: boolean
  public promise: Promise

  constructor(promise) {
    this.cancelled = false
    this.promise = new Promise((resolve, reject) => {
      promise.then(
        // eslint-disable-next-line prefer-promise-reject-errors
        val => (this.cancelled ? reject() : resolve(val)),
        error => reject(error),
      )
    })
    return this.promise
  }

  public async then() {
    await this.promise.then()
  }

  public cancel() {
    this.cancelled = true
    this.promise.cancel()
  }
}
