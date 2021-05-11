import React, { useState, useEffect, useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { FormField } from '../../Form'
import { videoIcon, addressIcon, peopleIcon, arrowDownIcon, trashIcon, closeIcon } from '../../../assets/icons'
import { categories as ObjectCategories } from '../../../constants/categories'
import LocationApi from '../../../api/location'
import {
  StyledCheckBox,
  StyledClearButton,
  StyledDropBox,
  StyledFilterBox,
  StyledSaveButton,
  StyledSelect,
  StyledDropButton,
  StyledHr,
  StyledIconText,
  StyledFormChip,
  StyledClearFilterButton,
  StyledFilterArrowIcon,
  StyledCloseButton,
} from './FilterStyles'

const attendanceOptions = ['Vídeo chamada', 'Domicílio', 'Clínica ou Hospital']
const categories = ObjectCategories.map((x) => x.Description)

export const FilterCard = ({ children, onClear, onSave, icon, label, ...props }) => {
  const screenSize = useContext(ResponsiveContext)

  return (
    <StyledDropButton
      dropAlign={{ top: 'bottom', left: 'left' }}
      dropProps={{
        style: {
          boxShadow: 'none',
          background: 'transparent',
          marginTop: screenSize === 'small' ? '0px' : '10px',
        },
      }}
      dropContent={
        <StyledDropBox>
          <Box data-testid="teste-modal" style={{ overflow: 'auto' }} pad="medium">
            {children}
          </Box>
          <StyledHr color="#fff" />
          <Box pad="medium" direction="row" style={{ minHeight: '92px' }} justify="between">
            <StyledClearButton
              data-testeid="teste-limpar"
              size="small"
              onClick={() => {
                onClear()
              }}
            >
              Limpar
            </StyledClearButton>
            <StyledSaveButton
              size="small"
              droplet="bottom-left"
              onClick={() => {
                onSave()
              }}
            >
              Salvar
            </StyledSaveButton>
          </Box>
        </StyledDropBox>
      }
      {...props}
    >
      {icon && <StyledIconText src={icon} alt={`${label} Icon`} />}
      <span>{label}</span>
      <StyledFilterArrowIcon src={arrowDownIcon} />
    </StyledDropButton>
  )
}

export const FilterChip = ({ label, icon, onClose }) => {
  return (
    <StyledFormChip data-testid="filter-chip" >
      <StyledIconText src={icon} alt={`${label} icone`} />
      {label}
      <StyledCloseButton onClick={() => onClose()}>
        <StyledIconText src={closeIcon} alt={`Excluir filtro ${label}`} />
      </StyledCloseButton>
    </StyledFormChip>
  )
}

const Filter = ({ filters, setFilters }) => {
  const [attendanceOption, setAttendanceOption] = useState([])
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [category, setCategory] = useState([])
  const [loadingCities, setLoadingCities] = useState(false)
  const [cities, setCities] = useState([])
  const [states, setStates] = useState([])

  const hasFilter =
    filters.attendanceOptions.length > 0 || filters.categories.length > 0 || filters.localities.length > 0

  useEffect(() => {
    let mounted = true

    const getUfs = async () => {
      setLoadingCities(true)
      LocationApi.getUf().then((response) => {
        if (mounted) {
          setStates(response)
        }
      })

      setLoadingCities(false)
    }
    getUfs()

    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    let mounted = true

    const getCitiesByUf = async () => {
      setLoadingCities(true)
      LocationApi.getCitiesByUF(state).then((response) => {
        if (mounted) {
          setCities(response)
        }
      })

      setLoadingCities(false)
    }
    getCitiesByUf()

    return () => {
      mounted = false
    }
  }, [state])

  return (
    <>
      <StyledFilterBox data-testid="checkbox-tipos-de-atendimento" margin={{ bottom: 'medium' }}>
        <FilterCard
          label="Tipos de atendimento"
          icon={videoIcon}
          onClear={() => setAttendanceOption([])}
          onSave={() => {
            setFilters({ ...filters, attendanceOptions: attendanceOption })
          }}
          onOpen={() => setAttendanceOption(filters.attendanceOptions)}
        >
          <StyledCheckBox
            value={attendanceOption}
            options={attendanceOptions}
            onChange={({ value }) => setAttendanceOption(value)}
          />
        </FilterCard>
        <FilterCard
          label="Localidade"
          icon={addressIcon}
          onClear={() => {
            setCity('')
            setState('')
          }}
          onSave={() => {
            setFilters({ ...filters, localities: [...filters.localities, { state, city }] })
            setCity('')
            setState('')
          }}
        >
          <FormField label="Estado" name="state" marginBottom="none">
            <StyledSelect options={states} value={state} onChange={({ value }) => setState(value)} />
          </FormField>
          <FormField label="Cidade" name="city" marginBottom="none">
            <StyledSelect
              options={cities}
              disabled={loadingCities || !state}
              value={city}
              onChange={({ value }) => setCity(value)}
            />
          </FormField>
        </FilterCard>
        <FilterCard
          label="Categoria"
          icon={peopleIcon}
          onClear={() => setCategory([])}
          onSave={() => {
            setFilters({ ...filters, categories: category })
          }}
          onOpen={() => setCategory(filters.categories)}
        >
          <StyledCheckBox options={categories} value={category} onChange={({ value }) => setCategory(value)} />
        </FilterCard>
      </StyledFilterBox>
      {hasFilter && (
        <Box direction="row" wrap margin={{ bottom: 'medium' }}>
          <StyledClearFilterButton
            onClick={() => setFilters({ localities: [], categories: [], attendanceOptions: [] })}
            size="small"
            droplet="bottom-left"
          >
            <StyledIconText src={trashIcon} alt="Limpar filtros icon" />
            Limpar filtros
          </StyledClearFilterButton>
          {filters.attendanceOptions.map((option, index) => (
            <FilterChip
              label={option}
              key={index}
              icon={videoIcon}
              onClose={() =>
                setFilters({ ...filters, attendanceOptions: filters.attendanceOptions.filter((x) => x !== option) })
              }
            />
          ))}
          {filters.localities.map((option, index) => (
            <FilterChip
              label={`${option.city} - ${option.state}`}
              key={index}
              icon={addressIcon}
              onClose={() =>
                setFilters({
                  ...filters,
                  localities: filters.localities.filter((x) => x.city !== option.city && x.state !== option.state),
                })
              }
            />
          ))}
          {filters.categories.map((option, index) => (
            <FilterChip
              label={option}
              key={index}
              icon={peopleIcon}
              onClose={() => setFilters({ ...filters, categories: filters.categories.filter((x) => x !== option) })}
            />
          ))}
        </Box>
      )}
    </>
  )
}

export default Filter
