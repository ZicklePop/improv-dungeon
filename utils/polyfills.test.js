import polyfills from './polyfills'

describe('utils - polyfills', () => {
  it('should be a function', () => {
    expect(typeof polyfills).toBe('function')
  })
})
