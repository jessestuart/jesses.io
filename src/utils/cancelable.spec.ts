import { Cancelable } from './cancelable'

test('Create Cancelable, without canceling.', () => {
  let foo = 'bar'
  const cancelable = new Cancelable(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        foo = 'baz'
      }, 1000)
    }),
  )

  expect(cancelable).toBeDefined()
  cancelable.then(() => expect(foo).toBe('baz'))
})

test('Create Cancelable and cancel, then ensure no side effects.', async () => {
  let foo = 'bar'
  const cancelable = new Cancelable(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        foo = 'baz'
      }, 1000)
      resolve()
    }),
  )

  expect(cancelable).toBeDefined()
  await cancelable.cancel()
  await cancelable.then(() => {
    expect(foo).toBe('bar')
    expect(cancelable.cancelled).toBeFalsy()
  })
})

test('Create Cancelable and ensure errors are gracefully handled.', async () => {
  const foo = 'bar'
  const cancelable = new Cancelable(
    new Promise((resolve, reject) => {
      // eslint-disable-next-line
      reject()
    }),
  )

  expect(cancelable).toBeDefined()
  cancelable.then(() => expect(foo).toBe('bar'))
})
