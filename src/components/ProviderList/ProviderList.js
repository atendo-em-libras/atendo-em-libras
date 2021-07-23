import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { ProviderCard } from '../ProviderCard'
import { ErrorCard } from '../ErrorCard'
import ProviderApi from '../../api/provider'
import { ResponsiveGrid } from '../ResponsiveGrid'
import { COLORS } from '../../constants/colors'
import Filter from './Filter'
import { SuccessModal } from '../../components/SuccessModal'
import { Heading } from '../../components/Typography/Heading'
import { Button } from '../../components/Buttons'
import { Box, Image, Paragraph } from 'grommet'
import img_palmas from '../../assets/images/img_palmas.svg'

const columns = {
  small: ['auto'],
  medium: ['auto'],
  large: ['auto', 'auto'],
}

const rows = {
  small: ['auto'],
  medium: ['auto'],
  large: ['auto'],
}

const fixedGridAreas = {
  small: [{ name: 'card', start: [0, 0], end: [0, 0] }],
  medium: [{ name: 'card', start: [0, 0], end: [0, 0] }],
  large: [{ name: 'card', start: [0, 0], end: [1, 0] }],
}

const ProviderList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [providers, setProviders] = useState([])
  const [filteredProviders, setFilteredProviders] = useState([])
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)
  const [filters, setFilters] = useState({
    localities: [],
    categories: [],
    attendanceOptions: [],
    healthInsurances: [],
  })

  const loadServiceProviders = async () => {
    try {
      const serviceProvidersJson = await ProviderApi.get()
      setIsLoading(false)
      setProviders(serviceProvidersJson)
      setFilteredProviders(serviceProvidersJson)
    } catch (error) {
      setError(true)
      setIsLoading(false)
    }
  }

  const handleClick = () => {
    loadServiceProviders()
  }

  useEffect(() => {
    loadServiceProviders()
  }, [])

  useEffect(() => {
    let filteredByCategory = null
    let filteredByAttendanceType = null
    let filteredByState = null
    let filteredByHealthInsurance = null

    // Category
    const hasNoSelectedCategory = filters.categories.length === 0

    if (hasNoSelectedCategory) {
      filteredByCategory = providers
    } else {
      filteredByCategory = providers.filter((item) => filters.categories.includes(item.category))
    }

    // Attendance
    const hasNoSelectedAttendanceType = filters.attendanceOptions.length === 0

    if (hasNoSelectedAttendanceType) {
      filteredByAttendanceType = filteredByCategory
    } else {
      filteredByAttendanceType = filteredByCategory.filter((item) => {
        return (
          (filters.attendanceOptions.includes('Vídeo chamada') && !!item.attendance.onlineAttendance) ||
          (filters.attendanceOptions.includes('Clínica ou Hospital') && !!item.attendance.hospitalClinicAttendance) ||
          (filters.attendanceOptions.includes('Domicílio') && !!item.attendance.householdAttendance)
        )
      })
    }

    // State
    const hasNoSelectedState = filters.localities.length === 0
    const hasOnlyOnlineAsAttendanceType =
      filters.attendanceOptions.includes('Vídeo chamada') && filters.attendanceOptions.length === 1

    if (hasNoSelectedState || hasOnlyOnlineAsAttendanceType) {
      filteredByState = filteredByAttendanceType
    } else {
      filteredByState = filteredByAttendanceType.filter((item) => {
        return (
          (item.attendance.hospitalClinicAttendance &&
            item.attendance.hospitalClinicAttendance.stateInitials === filters.localities[0].state) ||
          (item.attendance.householdAttendance &&
            item.attendance.householdAttendance.stateInitials === filters.localities[0].state)
        )
      })
    }

    // Health Insurance
    const hasNoSelectedHealthInsurance = filters.healthInsurances.length === 0

    if (hasNoSelectedHealthInsurance) {
      filteredByHealthInsurance = filteredByState
    } else {
      filteredByHealthInsurance = filteredByState.filter((item) =>
        filters.healthInsurances.find((healthOpt) =>
          item.healthInsurance?.toLowerCase()?.includes(healthOpt.toLowerCase())
        )
      )
    }

    setFilteredProviders(filteredByHealthInsurance)
    setShow(filteredByHealthInsurance.length == 0 && !isLoading)
  }, [filters, providers])

  if (isLoading) {
    return (
      <Box direction="row" justify="center">
        <ReactLoading className="loading-list" color={COLORS.brand} type="spinningBubbles" />
      </Box>
    )
  }

  const message = () => {
    if (filteredProviders && filteredProviders.length > 0) {
      return (
        <ResponsiveGrid
          columns={columns}
          rows={rows}
          areas={fixedGridAreas}
          justify="center"
          gapRow="50px"
          gapCol="50px"
        >
          {filteredProviders.map((provider, index) => {
            return <ProviderCard key={index} provider={provider} gridArea="card" />
          })}
        </ResponsiveGrid>
      )
    } else if (error) {
      return <ErrorCard onClick={handleClick} />
    }
  
    return (
      <>  
        {show && (
          <SuccessModal responsive={false} animation="fadeIn" style={{ borderRadius: '1em' }}>
            <Box pad="medium" align="center">
              <Image src={img_palmas} margin={{ bottom: 'medium' }} />
              <Heading level="2" color={COLORS.brand} style={{ fontWeight: 'bold' }} margin={{ bottom: 'medium' }}>
                Parabéns!
              </Heading>
              <Paragraph textAlign="center" margin={{ bottom: 'medium' }}>
                Obrigada, iremos analisar o cadastro e em breve incluiremos na nossa plataforma.
              </Paragraph>
              <Box direction="row" justify="center">
                <Button 
                  label="Muito bem!" 
                  size="small" 
                  primary droplet="bottom-left" 
                  onClick={() => {
                    setShow(false)
                    setFilters({
                      localities: [],
                      categories: [],
                      attendanceOptions: [],
                      healthInsurances: [],
                    })}} 
                  />
              </Box>
            </Box>
          </SuccessModal>
        )}
      </>
    )
  }

  return (
    <React.Fragment>
      <Filter filters={filters} setFilters={setFilters} />
      {message()}
    </React.Fragment>
  )
}
export { ProviderList }
