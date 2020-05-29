import React from 'react'
import PropTypes from 'prop-types';
import './ProviderCard.css'

class ProviderCard extends React.Component {
    render() {
        const { name, category, specialty, licenseNumber, videoCallAvailability } = this.props
        return (
            <div className='providerCard'>
                { videoCallAvailability && 
                <p className='providerVideoCallAvailability'>Atende Online</p> }
                <div className='providerCardHeader'>
                    <p className='providerCategory'>{ category }</p> 
                    <p className='providerSpecialty'>{ specialty }</p>
                </div>
                <div>
                  <h1>{ name }</h1>
                  <p>{ licenseNumber }</p>
                </div>
            </div>
        )
    }
}

ProviderCard.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    licenseNumber: PropTypes.string.isRequired,
    videoCallAvailability: PropTypes.bool
}

export { ProviderCard };