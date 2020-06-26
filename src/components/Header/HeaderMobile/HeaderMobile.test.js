import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderMobile } from './HeaderMobile'

describe('HeaderMobile component', () => {
  let view
  let onClick

  beforeEach(() => {
    // onClick = jest.fn()
    // view = render(<HeaderMobile onClick={onClick} />)
  })

  it('should execute callback function when close icon is clicked', () => {
    onClick = jest.fn()
    view = render(<HeaderMobile onClick={onClick} />)

    const closeButton = view.getByLabelText('Close Menu Button')

    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(onClick).toHaveBeenCalled()
  })

  it('should redirect to form when register button is clicked', () => {})

  //   it('Render correctly', () => {
  //     const { container } = render(<HeaderMobile />)
  //     expect(container).toMatchSnapshot()
  //   })
})
