import React from 'react'
import { CategoryBadge, categoryColors } from './CategoryBadge'
import { render } from '@testing-library/react'
import 'jest-styled-components'

describe('CategoryBadge', () => {
  it('renders medicine correctly', () => {
    const { container } = render(<CategoryBadge category="Medicina" />)

    expect(container.firstChild).toHaveStyleRule('background-color', categoryColors.Medicina)
    expect(container).toMatchSnapshot()
  })

  it('renders advocacia as default correctly', () => {
    const { container } = render(<CategoryBadge category="Advocacia" />)

    expect(container.firstChild).toHaveStyleRule('background-color', categoryColors.Outro)
    expect(container).toMatchSnapshot()
  })

  it('renders pessoa cuidadora correctly', () => {
    const { container } = render(<CategoryBadge category="Pessoa cuidadora" />)

    expect(container.firstChild).toHaveStyleRule('background-color', categoryColors['Pessoa cuidadora'])
    expect(container).toMatchSnapshot()
  })

  it('renders psicologia case correctly', () => {
    const { container } = render(<CategoryBadge category="Psicologia" />)

    expect(container.firstChild).toHaveStyleRule('background-color', categoryColors.Psicologia)
    expect(container).toMatchSnapshot()
  })

  it('renders enfermagem case correctly', () => {
    const { container } = render(<CategoryBadge category="Enfermagem" />)

    expect(container.firstChild).toHaveStyleRule('background-color', categoryColors.Enfermagem)
    expect(container).toMatchSnapshot()
  })

  it('renders fisioterapia case correctly', () => {
    const { container } = render(<CategoryBadge category="Fisioterapia" />)

    expect(container.firstChild).toHaveStyleRule('background-color', categoryColors.Fisioterapia)
    expect(container).toMatchSnapshot()
  })

  it('renders odontologia case correctly', () => {
    const { container } = render(<CategoryBadge category="Odontologia" />)

    expect(container.firstChild).toHaveStyleRule('background-color', categoryColors.Odontologia)
    expect(container).toMatchSnapshot()
  })

  it('renders fonoaudiologia case correctly', () => {
    const { container } = render(<CategoryBadge category="Fonoaudiologia" />)

    expect(container.firstChild).toHaveStyleRule('background-color', categoryColors.Fonoaudiologia)
    expect(container).toMatchSnapshot()
  })

  it('renders nutrição case correctly', () => {
    const { container } = render(<CategoryBadge category="Nutrição" />)

    expect(container.firstChild).toHaveStyleRule('background-color', categoryColors.Nutrição)
    expect(container).toMatchSnapshot()
  })
})
