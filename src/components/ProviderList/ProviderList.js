import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { ProviderCard } from '../ProviderCard'
import { ErrorCard } from '../ErrorCard'
import ProviderApi from '../../api/provider'
import { ResponsiveGrid } from '../ResponsiveGrid'
import { COLORS } from '../../constants/colors'
import Filter from './Filter'
import { Box } from 'grommet'

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
  const [isLoading, setIsLoading] = useState(false)
  const [providers, setProviders] = useState([])
  const [filteredProviders, setFilteredProviders] = useState([])
  const [filters, setFilters] = useState({ localities: [], categories: [], attendanceOptions: [] })

  const loadServiceProviders = async () => {
    setIsLoading(true)
    const serviceProvidersJson = await ProviderApi.get()
    setIsLoading(false)
    setProviders(serviceProvidersJson)
    setFilteredProviders(serviceProvidersJson)
  }

  const handleClick = () => {
    loadServiceProviders()
  }

  useEffect(() => {
    loadServiceProviders()
  }, [])

  useEffect(() => {
    const filterProviders = () => {
      const filtered = providers.filter((provider) => {
        let isFiltered = true
        for (let i = 0; i < filters.attendanceOptions.length; i++) {
          isFiltered = provider.attendance[filters.attendanceOptions[i]]

          if (isFiltered) break
        }

        for (let i = 0; i < filters.categories.length; i++) {
          isFiltered = provider.category === filters.categories[i]

          if (isFiltered) break
        }

        // for (let i = 0; i < filters.localities.length; i++) {
        //   const { houseHoldAttendance, hospitalClinicAttendance } = provider.attendance;

        //   if (houseHoldAttendance) {
        //     isFiltered = houseHoldAttendance.stateInitials ===
        //   }
        // }

        return isFiltered
      })

      setFilteredProviders(filtered)
    }

    filterProviders()
  }, [filters, providers])

  if (isLoading) {
    return (
      <Box direction="row" justify="center">
        <ReactLoading className="loading-list" color={COLORS.brand} type="spinningBubbles" />
      </Box>
    )
  }

  return (
    <React.Fragment>
      <Filter filters={filters} setFilters={setFilters} />
      {filteredProviders && filteredProviders.length > 0 ? (
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
      ) : (
        <ErrorCard onClick={handleClick} />
      )}
    </React.Fragment>
  )
}
export { ProviderList }
