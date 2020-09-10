import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { RadioButtonGroup } from './RadioButtonGroup'

describe('RadioButtonGroup', () => {
  it('Should render the given options', () => {
    const options = [
      { label: 'opcao1', value: 1 },
      { label: 'opcao1', value: 2 },
    ]

    const expectedValue = 2

    let newValue = 0
    const component = render(
      <RadioButtonGroup
        options={options}
        onChange={(value) => {
          newValue = value
        }}
      ></RadioButtonGroup>
    )
    const renderOptions = component.container.querySelectorAll('button')

    fireEvent.click(renderOptions[1])

    expect(newValue).toBe(expectedValue)
  })
})
