import { Badge } from '../../Badge/'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const categoryColors = Object.freeze({
  Outro: '#5A8DED',
  Medicina: '#2AC390',
  'Pessoa cuidadora': '#EAC276',
  Psicologia: '#A97FE2',
  Enfermagem: '#F778C1',
  Fisioterapia: '#ED985A',
  Odontologia: '#51CECE',
  Fonoaudiologia: '#7C65DE',
  Nutrição: '#A0C32A',
})

class CategoryBadge extends Component {
  getCategoryColor = (categoryString) => {
    const color = categoryColors[categoryString]
    if (!color) return categoryColors['Outro']
    return color
  }

  render() {
    const { category } = this.props
    return <Badge color={this.getCategoryColor(category)}>{category}</Badge>
  }
}

CategoryBadge.propTypes = {
  category: PropTypes.string.isRequired,
}

export { CategoryBadge, categoryColors }
