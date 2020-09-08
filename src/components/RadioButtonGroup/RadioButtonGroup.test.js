import React from 'react'
import { render } from '@testing-library/react'

import { RadioButtonGroup } from './RadioButtonGroup'

describe('RadioButtonGroup', () => {
  it('Should render the given options', () => {
    const options = [<input type="radio" value="opcao1" key={1} />, <input type="radio" key={2} value="opcao2" />]

    const component = render(<RadioButtonGroup data-testid="radio-button-group">{options}</RadioButtonGroup>)
    const renderOptions = component.container.querySelectorAll('input')

    expect(renderOptions[0].value).toBe('opcao1')
    expect(renderOptions[1].value).toBe('opcao2')
  })
})
