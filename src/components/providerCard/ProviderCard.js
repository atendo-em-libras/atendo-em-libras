import React from 'react'
import PropTypes from 'prop-types';
import './ProviderCard.css'

class ProviderCard extends React.Component {
    render() {
        const { name, category, specialty, licenseNumber, videoCallAvailability, phoneNumber, email } = this.props
        return (
            <div className='providerCard'>
                { videoCallAvailability && 
                <p className='providerVideoCallAvailability'>Atende Online</p> }
                <div className='providerCardHeader'>
                    <p className='providerCategory'>{ category }</p> 
                    <p className='providerSpecialty'>{ specialty }</p>
                </div>
                <div className='providerCardBody'>
                    <div className='providerCardColumn'>
                        <p>{ name }</p>
                        <p>REGISTRO</p>
                        <p>{ licenseNumber }</p>
                    </div>
                    <div className='providerCardColumn'>
                        <div className="columnBlock">
                            <p>Contato</p>
                            <p>{ phoneNumber }</p>
                            <p>{ email }</p>
                        </div>
                    </div>
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
    videoCallAvailability: PropTypes.bool,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export { ProviderCard };