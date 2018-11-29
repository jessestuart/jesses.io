import Promise from 'bluebird'

export default class Cancelable extends Promise<any> {
  public cancelled: boolean = false
  // protected promise?: Promise<any>

  constructor(promise: Promise<any>) {
    super((resolve, reject) => {
      this.cancelled = false
      promise.then(
        // eslint-disable-next-line prefer-promise-reject-errors
        val => (this.cancelled ? reject() : resolve(val)),
        error => reject(error)
      )
    })
    // return this.promise as Cancelable
  }

  public cancel = () => {
    this.cancelled = true
    this.cancel()
    // this.promise.cancel()
  }
}
