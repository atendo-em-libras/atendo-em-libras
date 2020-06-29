import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderMobile } from './HeaderMobile'

describe('HeaderMobile component', () => {
  let view
  let onClose

  beforeEach(() => {
    onClose = jest.fn()
    view = render(<HeaderMobile onClose={onClose} />)
  })

  it('should execute callback function when close button is clicked', () => {
    const closeButton = view.getByLabelText('Close Menu Button')

    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalled()
  })

  it('should redirect to form when register button is clicked', () => {})

  //   it('Render correctly', () => {
  //     const { container } = render(<HeaderMobile />)
  //     expect(container).toMatchSnapshot()
  //   })
})
