import ReactGA from 'react-ga'
import { initialize, pageview } from './core'
jest.mock('react-ga')

describe('initializeAnalytics()', () => {
  beforeEach(() => {
    ReactGA.initialize.mockClear()
  })

  describe("when environment is 'production'", () => {
    it('initializes ReactGA', () => {
      initialize({ environment: 'production' })

      expect(ReactGA.initialize).toHaveBeenCalledTimes(1)
    })
    it('does NOT initialize in testMode', () => {
      initialize({ environment: 'production' })

      expect(ReactGA.initialize.mock.calls[0][1]).toEqual({ testMode: false })
    })
  })
  describe("when environment is NOT 'production'", () => {
    it('initializes ReactGA', () => {
      initialize({ environment: 'test' })

      expect(ReactGA.initialize).toHaveBeenCalledTimes(1)
    })
    it('initializes in testMode', () => {
      initialize({ environment: 'test' })

      expect(ReactGA.initialize.mock.calls[0][1]).toEqual({ testMode: true })
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
