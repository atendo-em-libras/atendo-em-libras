import React, { useState, useEffect, useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { FormField } from '../../Form'
import {
  videoIcon,
  addressIcon,
  peopleIcon,
  arrowDownIcon,
  trashIcon,
  closeIcon,
  cardIcon,
} from '../../../assets/icons'
import { categories as ObjectCategories } from '../../../constants/categories'
import { healthInsurance as ObjectHealthInsurance } from '../../../constants/healthInsurance'
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
const categories = ObjectCategories.map((x) => x.description)
const healthInsuranceOptions = ObjectHealthInsurance.map((item) => item.description)

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
              data-testid="filter-save-button"
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
    <StyledFormChip data-testid="filter-chip">
      <StyledIconText src={icon} alt={`${label} icone`} />
      {label}
      <StyledCloseButton onClick={() => onClose()}>
        <StyledIconText data-testid="filter-chip-btn-excluir" src={closeIcon} alt={`Excluir filtro ${label}`} />
      </StyledCloseButton>
    </StyledFormChip>
  )
}

const Filter = ({ filters, setFilters }) => {
  const [attendanceOption, setAttendanceOption] = useState([])
  const [state, setState] = useState('')
  const [category, setCategory] = useState([])
  const [states, setStates] = useState([])
  const [healthInsurances, setHealthInsurances] = useState([])
  const hasFilter =
    filters.attendanceOptions.length > 0 ||
    filters.categories.length > 0 ||
    filters.localities.length > 0 ||
    filters.healthInsurances.length > 0

  useEffect(() => {
    let mounted = true

    const getUfs = async () => {
      LocationApi.getUf().then((response) => {
        if (mounted) {
          setStates(response)
        }
      })
    }
    getUfs()

    return () => {
      mounted = false
    }
  }, [])

  function desabilitaEstado() {
    return filters.attendanceOptions.includes('Vídeo chamada') && filters.attendanceOptions.length === 1
  }

  function mostrarObservacaoLocalidade() {
    return filters.attendanceOptions.includes('Vídeo chamada')
  }

  return (
    <>
      <StyledFilterBox data-testid="filter-box" margin={{ bottom: 'medium' }}>
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
          data-testid="teste-modal-localidade"
          label="Localidade"
          icon={addressIcon}
          onClear={() => {
            setState('')
          }}
          onSave={() => {
            setFilters({ ...filters, localities: [...filters.localities, { state }] })
            setState('')
          }}
          disabled={desabilitaEstado()}
        >
          <FormField label="Estado" name="state" marginBottom="none">
            <StyledSelect
              data-testid="teste-estados"
              options={states}
              value={state}
              onChange={({ value }) => setState(value)}
              onSave={() => {
                setFilters({ ...filters, localities: [...filters.localities] })
              }}
            />
          </FormField>
        </FilterCard>
        <FilterCard
          data-testid="checkbox-categoria"
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
        <FilterCard
          data-testid="teste-plano-saude"
          label="Plano de Saúde"
          icon={cardIcon}
          onClear={() => {
            setHealthInsurances([])
          }}
          onSave={() => {
            setFilters({ ...filters, healthInsurances: healthInsurances })
          }}
          onOpen={() => setHealthInsurances(filters.healthInsurances)}
        >
          <StyledCheckBox
            options={healthInsuranceOptions}
            value={healthInsurances}
            onChange={({ value }) => setHealthInsurances(value)}
          />
        </FilterCard>
      </StyledFilterBox>
      {hasFilter && (
        <Box direction="row" wrap margin={{ bottom: 'medium' }}>
          <StyledClearFilterButton
            onClick={() => setFilters({ localities: [], categories: [], attendanceOptions: [], healthInsurances: [] })}
            size="small"
            droplet="bottom-left"
            data-testid="limpar-filtro"
          >
            <StyledIconText src={trashIcon} alt="Limpar filtros icon" />
            Limpar filtros
          </StyledClearFilterButton>
          {filters.attendanceOptions.map((option, index) => (
            <FilterChip
              data-testid="filter-chip-limpar"
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
              label={`${option.state}`}
              key={index}
              icon={addressIcon}
              onClose={() =>
                setFilters({
                  ...filters,
                  localities: filters.localities.filter((x) => x.state !== option.state),
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
          {filters.healthInsurances.map((option, index) => (
            <FilterChip
              label={option}
              key={index}
              icon={cardIcon}
              onClose={() =>
                setFilters({
                  ...filters,
                  healthInsurances: filters.healthInsurances.filter((healthOpt) => healthOpt !== option),
                })
              }
            />
          ))}
        </Box>
      )}
      {mostrarObservacaoLocalidade() && <p> *Filtro de localidade não se aplica a video chamada</p>}
    </>
  )
}

export default Filter
