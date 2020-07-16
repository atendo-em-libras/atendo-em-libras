import ReactGA from 'react-ga'
import { initialize, pageview } from './core'
jest.mock('react-ga')

describe('initializeAnalytics()', () => {
  beforeEach(() => {
    ReactGA.initialize.mockClear()
  })

  describe("when environment is 'production'", () => {
    const analyticsKey = 'any-key'
    const environment = 'production'

    it('initializes ReactGA', () => {
      initialize({ environment, analyticsKey })

      expect(ReactGA.initialize).toHaveBeenCalledTimes(1)
    })

    it('does NOT initialize in testMode', () => {
      initialize({ environment, analyticsKey })

      expect(ReactGA.initialize.mock.calls[0][1]).toEqual({ testMode: false })
    })

    it('initializes with given analyticsKey', () => {
      initialize({ environment, analyticsKey })

      expect(ReactGA.initialize.mock.calls[0][0]).toEqual(analyticsKey)
    })
  })
  describe("when environment is NOT 'production'", () => {
    const analyticsKey = 'any-key'
    const environment = 'test'

    it('initializes ReactGA', () => {
      initialize({ environment, analyticsKey })

      expect(ReactGA.initialize).toHaveBeenCalledTimes(1)
    })

    it('initializes in testMode', () => {
      initialize({ environment, analyticsKey })

      expect(ReactGA.initialize.mock.calls[0][1]).toEqual({ testMode: true })
    })

    it('initializes with given analyticsKey', () => {
      initialize({ environment, analyticsKey })

      expect(ReactGA.initialize.mock.calls[0][0]).toEqual(analyticsKey)
    })
  })
})

describe('pageview()', () => {
  beforeEach(() => {
    ReactGA.pageview.mockClear()
  })

  it('calls ReactGA pageview()', () => {
    const targetPage = '/AnyPage'
    pageview(targetPage)

    expect(ReactGA.pageview).toHaveBeenCalledTimes(1)
    expect(ReactGA.pageview.mock.calls[0][0]).toEqual(targetPage)
  })
})
