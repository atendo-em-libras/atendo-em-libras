import React from 'react'
import PropTypes from 'prop-types';

class ProviderCard extends React.Component {
    render() {
        const {name} = this.props
        return (
            <div>
            <h1>{ name }</h1>
            </div>
        )
    }
}

ProviderCard.propTypes = {
    name: PropTypes.string.isRequired
}

export default ProviderCard;