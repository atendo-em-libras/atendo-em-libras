import React from 'react'
import PropTypes from 'prop-types';
import './ProviderCard.css'

class ProviderCard extends React.Component {
    render() {
        const { name, category, speciality } = this.props
        return (
            <div className='providerCard'>
                <div className='providerCardHeader'>
                <p className='providerCategory'>{ category }</p> 
                <p className='providerSpeciality'>{ speciality }</p>
                </div>
                <h1>{ name }</h1>
            </div>
        )
    }
}

ProviderCard.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired
}

export { ProviderCard };