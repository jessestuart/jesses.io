import Promise from 'bluebird'
import _ from 'lodash'

export default class Cancelable {
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

  public then = (cb: () => any) =>
    this.cancelled ? Promise.resolve() : Promise.resolve(this.promise.then(cb))

  public cancel = () => _.set(this, 'cancelled', true)
}
