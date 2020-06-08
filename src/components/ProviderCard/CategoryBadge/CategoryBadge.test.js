import React from 'react'
import { CategoryBadge } from '.'
import { render } from '@testing-library/react'

describe('CategoryBadge', () => {
  it('renders medicine correctly', () => {
    const medicineBadge = render(<CategoryBadge category="Medicina" />)

    expect(medicineBadge).toMatchSnapshot()
  })

  it('renders advocacia as default correctly', () => {
    const lawyerBadge = render(<CategoryBadge category="Advocacia" />)

    expect(lawyerBadge).toMatchSnapshot()
  })

  it('renders pessoa cuidadora correctly', () => {
    const careGiverBadge = render(<CategoryBadge category="Pessoa Cuidadora" />)

    expect(careGiverBadge).toMatchSnapshot()
  })

  it('renders psicologia case correctly', () => {
    const psychology = render(<CategoryBadge category="Psicologia" />)

    expect(psychology).toMatchSnapshot()
  })

  it('renders enfermagem case correctly', () => {
    const nursing = render(<CategoryBadge category="Enfermagem" />)

    expect(nursing).toMatchSnapshot()
  })

  it('renders fisioterapia case correctly', () => {
    const physiotherapy = render(<CategoryBadge category="Fisioterapia" />)

    expect(physiotherapy).toMatchSnapshot()
  })

  it('renders odontologia case correctly', () => {
    const dentistry = render(<CategoryBadge category="Odontologia" />)

    expect(dentistry).toMatchSnapshot()
  })

  it('renders fonoaudiologia case correctly', () => {
    const speechTherapy = render(<CategoryBadge category="Fonoaudiologia" />)

    expect(speechTherapy).toMatchSnapshot()
  })

  it('renders nutrição case correctly', () => {
    const nutrition = render(<CategoryBadge category="Nutrição" />)

    expect(nutrition).toMatchSnapshot()
  })
})
