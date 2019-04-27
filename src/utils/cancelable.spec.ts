import Promise from 'bluebird'
import _ from 'lodash'

import log from 'utils/log'

import Cancelable from './cancelable'

describe('Cancelable', () => {
  beforeAll(() => {
    log.error = jest.fn()
  })

  test('Create Cancelable, without canceling.', () => {
    let foo = 'bar'
    const cancelable = new Cancelable(
      new Promise(() => {
        setTimeout(() => {
          foo = 'baz'
        })
      }),
    )
    cancelable.cancel()

    expect(cancelable).toBeDefined()
    cancelable.then(_.noop).catch(log.error)
    expect(foo).toEqual('bar')
    expect(log.error).not.toHaveBeenCalled()
  })

  test('Create Cancelable and cancel, then ensure no side effects.', () => {
    let foo = 'bar'
    const cancelable = new Cancelable(
      new Promise(() => {
        setTimeout(() => {
          foo = 'baz'
        }, 1000)
      }),
    )

    expect(foo).toBe('bar')
    cancelable.cancel()
    cancelable
      .then(() => {
        expect(foo).toBe('bar')
        expect(cancelable.cancelled).toBe(true)
        return Promise.resolve()
      })
      .catch(log.error)

    expect(log.error).not.toHaveBeenCalled()
    expect(foo).toBe('bar')
  })

  test('Create Cancelable and ensure errors are gracefully handled.', () => {
    const errMessage = 'Rejected promise in test!'
    const cancelable = new Cancelable(
      new Promise(() => {
        throw new Error(errMessage)
      }),
    )

    expect(cancelable).toBeDefined()
    cancelable
      .then(() => {
        expect(log.error).toHaveBeenCalledTimes(1)
        expect(log.error).toHaveBeenCalledWith(new Error(errMessage))
        return
      })
      .catch(log.error)
  })
})
