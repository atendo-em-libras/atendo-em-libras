import React from 'react'
import { FormField } from '../../Form'
import { StyledFilterBox } from '../Filter/FilterStyles'

const FilterLocations = () => {
  return (
    <>
      <StyledFilterBox margin={{ bottom: 'medium' }}>
        <FormField label="l">
          <span>Localidade</span>
        </FormField>
      </StyledFilterBox>
    </>
  )
}

export { FilterLocations }
