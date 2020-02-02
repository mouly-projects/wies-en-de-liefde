import assert from 'assert'
import Gig from './Gig'

describe('#Gig', () => {
  describe('_calculateIsDateInPast', () => {
    describe('given gig date is in the past', () => {
      // Arrange
      const element = {}
      const options = {
        date: '01-01-2020'
      }
      const gig = new Gig(element, options)

      const currentDateTime = '100'
      const gigDateTime = '10'

      // Act
      const actual = gig._calculateIsDateInPast(context, [
        currentDateTime,
        gigDateTime
      ])

      it('returns true', () => {
        // Assert
        assert.strictEqual(actual, true)
      })
    })

    describe('given gig date is in the future', () => {
      // Arrange
      const element = {}
      const options = {
        date: '01-01-2020'
      }
      const gig = new Gig(element, options)

      const currentDateTime = '10'
      const gigDateTime = '100'

      // Act
      const actual = gig._calculateIsDateInPast(context, [
        currentDateTime,
        gigDateTime
      ])

      it('returns false', () => {
        // Assert
        assert.strictEqual(actual, false)
      })
    })
  })
})
