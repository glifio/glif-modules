import { BigNumber } from 'bignumber.js'
import { FilecoinNumber } from '../FilecoinNumber'

describe('FilecoinNumber', () => {
  test('should return instances of BigNumber', () => {
    const filecoinNum = new FilecoinNumber('5000000000000000', 'attofil')
    expect(BigNumber.isBigNumber(filecoinNum)).toBe(true)
  })

  test('converts the same number into fil, picofil, and attofil denominations', () => {
    const picoFilecoinNum = new FilecoinNumber('5000000000', 'picofil')
    expect(picoFilecoinNum.toFil()).toBe('0.005')
    expect(picoFilecoinNum.toPicoFil()).toBe('5000000000')
    expect(picoFilecoinNum.toAttoFil()).toBe('5000000000000000')

    const attoFilecoinNum = new FilecoinNumber('5000000000000000', 'attofil')
    expect(attoFilecoinNum.toFil()).toBe('0.005')
    expect(attoFilecoinNum.toPicoFil()).toBe('5000000000')
    expect(attoFilecoinNum.toAttoFil()).toBe('5000000000000000')

    const filecoinNum = new FilecoinNumber('0.005', 'fil')
    expect(filecoinNum.toFil()).toBe('0.005')
    expect(filecoinNum.toPicoFil()).toBe('5000000000')
    expect(filecoinNum.toAttoFil()).toBe('5000000000000000')
  })

  test('throws error if no denom is specified in constructor', () => {
    // @ts-ignore
    expect(() => new FilecoinNumber('0.005')).toThrow()
  })

  test('throws error if no denom is specified in constructor', () => {
    // @ts-ignore
    expect(() => new FilecoinNumber('0.005', 'invalidDenom')).toThrow()
  })

  test('does not use scientific notation', () => {
    const fil = new FilecoinNumber('1000000000000000000000000', 'fil')
    expect(fil.toAttoFil().includes('e')).toBe(false)
  })

  describe('formatBalance', () => {
    test('it returns "< number" when the decimal is smaller than the num of dps passed', () => {
      expect(
        new FilecoinNumber('0.00001', 'fil').formatBalance({ decimals: 2 })
      ).toEqual('< 0.01 FIL')

      expect(
        new FilecoinNumber(
          '0.01104953007959368107188269908',
          'fil'
        ).formatBalance({ decimals: 2 })
      ).toEqual('0.01 FIL')

      expect(
        new FilecoinNumber('0.0000000001230500054', 'fil').formatBalance({
          decimals: 6
        })
      ).toEqual('< 0.000001 FIL')

      expect(
        new FilecoinNumber('0.00001', 'fil').formatBalance({ decimals: 5 })
      ).toEqual('0.00001 FIL')

      expect(
        new FilecoinNumber('0.0000000001230500054', 'fil').formatBalance({
          decimals: 16
        })
      ).toEqual('0.00000000012305 FIL')
    })

    test('it prettifies numbers between 1-1000', () => {
      expect(
        new FilecoinNumber('1', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('1 FIL')
      expect(
        new FilecoinNumber('1.2', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('1.2 FIL')
      expect(
        new FilecoinNumber('1.23', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('1.23 FIL')
      expect(
        new FilecoinNumber('10', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('10 FIL')
      expect(
        new FilecoinNumber('10.2', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('10.2 FIL')
      expect(
        new FilecoinNumber('10.234', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('10.234 FIL')
      expect(
        new FilecoinNumber('100', 'fil').formatBalance({ decimals: 16 })
      ).toEqual('100 FIL')
      expect(
        new FilecoinNumber('100.000124', 'fil').formatBalance({ decimals: 4 })
      ).toEqual('100.0001 FIL')
      expect(
        new FilecoinNumber('100.000124', 'fil').formatBalance({ decimals: 5 })
      ).toEqual('100.00012 FIL')
      expect(
        new FilecoinNumber('100.000124', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100.000124 FIL')

      expect(
        new FilecoinNumber('1000', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('1K FIL')
      expect(
        new FilecoinNumber('1000.23', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('1K FIL')
    })

    test('it adds max 3 approximation points and "K" to the end of numbers between 1000 and 999999.9999.....', () => {
      expect(
        new FilecoinNumber('100002', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100K FIL')
      expect(
        new FilecoinNumber('100202.02343267', 'fil').formatBalance({
          decimals: 7
        })
      ).toEqual('100.2K FIL')
      expect(
        new FilecoinNumber('10002.02343267', 'fil').formatBalance({
          decimals: 7
        })
      ).toEqual('10K FIL')
      expect(
        new FilecoinNumber('100102.23', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100.1K FIL')
      expect(
        new FilecoinNumber('100999.3', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100.9K FIL')
      expect(
        new FilecoinNumber('100999.3', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100.9K FIL')
      expect(
        new FilecoinNumber('1002.02343267', 'fil').formatBalance({
          decimals: 7
        })
      ).toEqual('1K FIL')
    })

    test('it adds max 3 approximation points and "M" to the end of numbers between 1000000 and 999999999.9999.....', () => {
      expect(
        new FilecoinNumber('1202000', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('1.2M FIL')
      expect(
        new FilecoinNumber('12020002.2345', 'fil').formatBalance({
          decimals: 7
        })
      ).toEqual('12M FIL')
      expect(
        new FilecoinNumber('100002000', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100M FIL')
      expect(
        new FilecoinNumber('100002000.02343267', 'fil').formatBalance({
          decimals: 7
        })
      ).toEqual('100M FIL')
      expect(
        new FilecoinNumber('100102000', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100.1M FIL')
      expect(
        new FilecoinNumber('100999000', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100.9M FIL')
    })

    test('it adds max 3 approximation points and "B" to the end of numbers between 1000000000 and 999999999999.9999.....', () => {
      expect(
        new FilecoinNumber('100002000234', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100B FIL')
      expect(
        new FilecoinNumber('100002001230.02343267', 'fil').formatBalance({
          decimals: 7
        })
      ).toEqual('100B FIL')
      expect(
        new FilecoinNumber('100102000432', 'fil').formatBalance({ decimals: 7 })
      ).toEqual('100.1B FIL')
    })

    test('it handles positive values', () => {
      // Zero
      expect(new FilecoinNumber('0', 'fil').formatBalance()).toEqual('0 FIL')

      // Decimals
      expect(
        new FilecoinNumber('0.123456789', 'fil').formatBalance({ decimals: 0 })
      ).toEqual('> 0 FIL')
      expect(
        new FilecoinNumber('0.0123456789', 'fil').formatBalance({ decimals: 1 })
      ).toEqual('< 0.1 FIL')
      expect(
        new FilecoinNumber('0.123456789', 'fil').formatBalance({ decimals: 1 })
      ).toEqual('0.1 FIL')
      expect(
        new FilecoinNumber('0.123456789', 'fil').formatBalance({ decimals: 2 })
      ).toEqual('0.12 FIL')
      expect(
        new FilecoinNumber('0.123456789', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('0.123 FIL')
      expect(
        new FilecoinNumber('1.23456789', 'fil').formatBalance({ decimals: 0 })
      ).toEqual('1 FIL')
      expect(
        new FilecoinNumber('1.23456789', 'fil').formatBalance({ decimals: 1 })
      ).toEqual('1.2 FIL')
      expect(
        new FilecoinNumber('1.23456789', 'fil').formatBalance({ decimals: 2 })
      ).toEqual('1.23 FIL')
      expect(
        new FilecoinNumber('1.23456789', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('1.234 FIL')

      // Less then 1000
      expect(new FilecoinNumber('1.23456789', 'fil').formatBalance()).toEqual(
        '1.23 FIL'
      )
      expect(new FilecoinNumber('12.3456789', 'fil').formatBalance()).toEqual(
        '12.34 FIL'
      )
      expect(new FilecoinNumber('123.456789', 'fil').formatBalance()).toEqual(
        '123.45 FIL'
      )

      // Thousands
      expect(new FilecoinNumber('1234.56789', 'fil').formatBalance()).toEqual(
        '1.2K FIL'
      )
      expect(new FilecoinNumber('12345.6789', 'fil').formatBalance()).toEqual(
        '12.3K FIL'
      )
      expect(new FilecoinNumber('123456.789', 'fil').formatBalance()).toEqual(
        '123.4K FIL'
      )

      // Millions
      expect(new FilecoinNumber('1234567.89', 'fil').formatBalance()).toEqual(
        '1.2M FIL'
      )
      expect(new FilecoinNumber('12345678.9', 'fil').formatBalance()).toEqual(
        '12.3M FIL'
      )
      expect(new FilecoinNumber('123456789', 'fil').formatBalance()).toEqual(
        '123.4M FIL'
      )

      // Billions
      expect(new FilecoinNumber('1234567890', 'fil').formatBalance()).toEqual(
        '1.2B FIL'
      )
      expect(new FilecoinNumber('12345678900', 'fil').formatBalance()).toEqual(
        '12.3B FIL'
      )
      expect(new FilecoinNumber('123456789000', 'fil').formatBalance()).toEqual(
        '123.4B FIL'
      )

      // Trillions
      expect(
        new FilecoinNumber('1234567890000', 'fil').formatBalance()
      ).toEqual('1.2T FIL')
    })

    test('it handles negative values', () => {
      // Zero
      expect(new FilecoinNumber('-0', 'fil').formatBalance()).toEqual('0 FIL')

      // Decimals
      expect(
        new FilecoinNumber('-0.123456789', 'fil').formatBalance({ decimals: 0 })
      ).toEqual('< 0 FIL')
      expect(
        new FilecoinNumber('-0.0123456789', 'fil').formatBalance({
          decimals: 1
        })
      ).toEqual('> -0.1 FIL')
      expect(
        new FilecoinNumber('-0.123456789', 'fil').formatBalance({ decimals: 1 })
      ).toEqual('-0.1 FIL')
      expect(
        new FilecoinNumber('-0.123456789', 'fil').formatBalance({ decimals: 2 })
      ).toEqual('-0.12 FIL')
      expect(
        new FilecoinNumber('-0.123456789', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('-0.123 FIL')
      expect(
        new FilecoinNumber('-1.23456789', 'fil').formatBalance({ decimals: 0 })
      ).toEqual('-1 FIL')
      expect(
        new FilecoinNumber('-1.23456789', 'fil').formatBalance({ decimals: 1 })
      ).toEqual('-1.2 FIL')
      expect(
        new FilecoinNumber('-1.23456789', 'fil').formatBalance({ decimals: 2 })
      ).toEqual('-1.23 FIL')
      expect(
        new FilecoinNumber('-1.23456789', 'fil').formatBalance({ decimals: 3 })
      ).toEqual('-1.234 FIL')

      // Less then 1000
      expect(new FilecoinNumber('-1.23456789', 'fil').formatBalance()).toEqual(
        '-1.234 FIL'
      )
      expect(new FilecoinNumber('-12.3456789', 'fil').formatBalance()).toEqual(
        '-12.345 FIL'
      )
      expect(new FilecoinNumber('-123.456789', 'fil').formatBalance()).toEqual(
        '-123.456 FIL'
      )

      // Thousands
      expect(new FilecoinNumber('-1234.56789', 'fil').formatBalance()).toEqual(
        '-1.2K FIL'
      )
      expect(new FilecoinNumber('-12345.6789', 'fil').formatBalance()).toEqual(
        '-12.3K FIL'
      )
      expect(new FilecoinNumber('-123456.789', 'fil').formatBalance()).toEqual(
        '-123.4K FIL'
      )

      // Millions
      expect(new FilecoinNumber('-1234567.89', 'fil').formatBalance()).toEqual(
        '-1.2M FIL'
      )
      expect(new FilecoinNumber('-12345678.9', 'fil').formatBalance()).toEqual(
        '-12.3M FIL'
      )
      expect(new FilecoinNumber('-123456789', 'fil').formatBalance()).toEqual(
        '-123.4M FIL'
      )

      // Billions
      expect(new FilecoinNumber('-1234567890', 'fil').formatBalance()).toEqual(
        '-1.2B FIL'
      )
      expect(new FilecoinNumber('-12345678900', 'fil').formatBalance()).toEqual(
        '-12.3B FIL'
      )
      expect(
        new FilecoinNumber('-123456789000', 'fil').formatBalance()
      ).toEqual('-123.4B FIL')

      // Trillions
      expect(
        new FilecoinNumber('-1234567890000', 'fil').formatBalance()
      ).toEqual('-1.2T FIL')
    })
  })
})
