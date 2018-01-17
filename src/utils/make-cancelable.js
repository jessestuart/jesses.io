import Promise from 'bluebird'

const makeCancelable = promise => {
  let hasCanceled_ = false

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val =>
        hasCanceled_ ? reject(new Error({ isCanceled: true })) : resolve(val),
      error =>
        hasCanceled_ ? reject(new Error({ isCanceled: true })) : reject(error)
    )
  })

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true
    },
  }
}

export default makeCancelable
