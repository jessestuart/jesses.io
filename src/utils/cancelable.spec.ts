import Promise from 'bluebird'
import _ from 'lodash'

import { Cancelable } from './cancelable'

test('Create Cancelable, without canceling.', () => {
  let foo = 'bar'
  const cancelable = new Cancelable(
    new Promise((_resolve, _reject) => {
      setTimeout(() => {
        foo = 'baz'
      }, 1000)
    }),
  )

  expect(cancelable).toBeDefined()
  cancelable.then(() => expect(foo).toBe('baz'))
})

test('Create Cancelable and cancel, then ensure no side effects.', () => {
  let foo = 'bar'
  const cancelable = new Cancelable(
    new Promise((resolve, _reject) => {
      setTimeout(() => {
        foo = 'baz'
      }, 1000)
      resolve()
    }),
  )

  expect(cancelable).toBeDefined()
  cancelable.cancel()
  cancelable.then(() => {
    expect(foo).toBe('bar')
    expect(cancelable.cancelled).toBe(true)
  })
  expect(foo).toBe('bar')
})

test('Create Cancelable and ensure errors are gracefully handled.', () => {
  const errMessage = 'Rejected promise in test!'
  const cancelable = new Cancelable(
    new Promise((_resolve, reject) => reject(errMessage)),
  )

  expect(cancelable).toBeDefined()
  cancelable.then(_.noop).catch(err => {
    expect(err).toEqual('Rejected promise in test!')
  })
})
