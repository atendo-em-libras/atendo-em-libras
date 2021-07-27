import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { InfoCard } from './InfoCard'
import { errorIcon } from '../../assets/icons'
import { errorInfo, notFoundInfo } from '../ProviderList/ProviderList.constants'
import 'jest-styled-components'

describe('InfoCard tests', () => {
  it('Render correctly', () => {
    let onClick = jest.fn()
    const { container } = render(
      <InfoCard
        onClick={onClick}
        srcImage={errorIcon}
        textParagraph={errorInfo.errorText}
        textButton={errorInfo.errorTextButton}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('Call reload function when button is clicked for Error', () => {
    const onClick = jest.fn()

    const { getByText } = render(
      <InfoCard
        onClick={onClick}
        srcImage={errorIcon}
        textParagraph={errorInfo.errorText}
        textButton={errorInfo.errorTextButton}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'reload' }))

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(getByText(errorInfo.errorText.title)).toBeInTheDocument()
  })
})
