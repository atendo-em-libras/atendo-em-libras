import { Badge } from './Badge'
import PropTypes from 'prop-types';
import React, { Component } from 'react'

class CategoryBadge extends Component {

  categoryColors = Object.freeze({
    'default': 'gray',
    'medicina': '#2AC390',
    'pessoa cuidadora': '#EAC276'
  })

  getCategoryColor = (categoryString) => {
    categoryString = categoryString.trim().toLowerCase()
    const color = this.categoryColors[categoryString]
    if (!color) return this.categoryColors['default']
    return color
  }

  render() {
    const { category } = this.props
    return (
      <Badge color={this.getCategoryColor(category)}>{ category }</Badge>
    )
  }
}

CategoryBadge.propTypes = {
  category: PropTypes.string.isRequired,
}

export { CategoryBadge }