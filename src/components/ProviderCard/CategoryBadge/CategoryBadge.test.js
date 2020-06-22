import React from 'react'
import { CategoryBadge } from './CategoryBadge'
import { render } from '@testing-library/react'
import 'jest-styled-components'

describe('CategoryBadge', () => {
  it('renders medicine correctly', () => {
    const { container } = render(<CategoryBadge category="Medicina" />)

    expect(container).toMatchSnapshot()
  })

  it('renders advocacia as default correctly', () => {
    const { container } = render(<CategoryBadge category="Advocacia" />)

    expect(container).toMatchSnapshot()
  })

  it('renders pessoa cuidadora correctly', () => {
    const { container } = render(<CategoryBadge category="Pessoa Cuidadora" />)

    expect(container).toMatchSnapshot()
  })

  it('renders psicologia case correctly', () => {
    const { container } = render(<CategoryBadge category="Psicologia" />)

    expect(container).toMatchSnapshot()
  })

  it('renders enfermagem case correctly', () => {
    const { container } = render(<CategoryBadge category="Enfermagem" />)

    expect(container).toMatchSnapshot()
  })

  it('renders fisioterapia case correctly', () => {
    const { container } = render(<CategoryBadge category="Fisioterapia" />)

    expect(container).toMatchSnapshot()
  })

  it('renders odontologia case correctly', () => {
    const { container } = render(<CategoryBadge category="Odontologia" />)

    expect(container).toMatchSnapshot()
  })

  it('renders fonoaudiologia case correctly', () => {
    const { container } = render(<CategoryBadge category="Fonoaudiologia" />)

    expect(container).toMatchSnapshot()
  })

  it('renders nutrição case correctly', () => {
    const { container } = render(<CategoryBadge category="Nutrição" />)

    expect(container).toMatchSnapshot()
  })
})
