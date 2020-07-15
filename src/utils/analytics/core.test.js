import ReactGA from 'react-ga'
import { initializeAnalytics } from './core'
jest.mock('react-ga')

describe('initializeAnalytics()', () => {
  beforeEach(() => {
    ReactGA.initialize.mockClear()
  })

  describe("when environment is 'production'", () => {
    it('initializes ReactGA', () => {
      initializeAnalytics({ environment: 'production' })

      expect(ReactGA.initialize).toHaveBeenCalledTimes(1)
    })
    it('does NOT initialize in testMode', () => {
      initializeAnalytics({ environment: 'production' })

      expect(ReactGA.initialize.mock.calls[0][1]).toEqual({ testMode: false })
    })
  })
  describe("when environment is NOT 'production'", () => {
    it('initializes ReactGA', () => {
      initializeAnalytics({ environment: 'test' })

      expect(ReactGA.initialize).toHaveBeenCalledTimes(1)
    })
    it('initializes in testMode', () => {
      initializeAnalytics({ environment: 'test' })

      expect(ReactGA.initialize.mock.calls[0][1]).toEqual({ testMode: true })
    })
  })
})
