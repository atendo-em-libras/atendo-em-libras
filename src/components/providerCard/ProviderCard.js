import React from 'react'
import PropTypes from 'prop-types';
import './ProviderCard.css'

class ProviderCard extends React.Component {
    render() {
        const { name, category, speciality, licenseNumber, videoCallAvaillability } = this.props
        return (
            <div className='providerCard'>
                { videoCallAvaillability && 
                <p className='providerVideoCallAvaillability'>Atende Online</p> }
                <div className='providerCardHeader'>
                    <p className='providerCategory'>{ category }</p> 
                    <p className='providerSpeciality'>{ speciality }</p>
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
    speciality: PropTypes.string.isRequired,
    licenseNumber: PropTypes.string.isRequired,
    videoCallAvaillability: PropTypes.bool
}

export { ProviderCard };