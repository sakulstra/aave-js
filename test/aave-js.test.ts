import { Marketplace } from '../src/aave-js'

/**
 * Marketplace test
 */
describe('Marketplace test', () => {
  it('Marketplace is instantiable', () => {
    expect(new Marketplace('token')).toBeInstanceOf(Marketplace)
  })
})
