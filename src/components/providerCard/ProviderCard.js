import React from 'react'
import PropTypes from 'prop-types';
import './ProviderCard.css'
import { Card } from './Card'
import { CategoryBadge } from './CategoryBadge';


class ProviderCard extends React.Component {

  categoryColors = Object.freeze({
    'medicina': '#2AC390',
    'pessoa cuidadora': '#EAC276'
  })

  getCategoryColor = (categoryString) => {
    categoryString = categoryString.trim().toLowerCase()
    return this.categoryColors[categoryString]
  }

  render() {
    const { name, category, specialty, licenseNumber, videoCallAvailability, phoneNumber, email } = this.props
    return (
      <Card className=''>
        { videoCallAvailability && 
        <p className='providerVideoCallAvailability'>Atende Online</p> }
        <div className='providerCardHeader'>
          <CategoryBadge category={category} />
          
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
      </Card>
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