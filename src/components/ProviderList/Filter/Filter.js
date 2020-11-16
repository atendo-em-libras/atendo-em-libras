import React, { useState } from 'react'
import { CheckBoxGroup, DropButton, Box } from 'grommet'
import { Button } from '../../Buttons'
import { Select } from '../../Form'
import styled from 'styled-components/macro'
import { COLORS } from '../../../constants/colors'

const StyledBox = styled(Box)`
  background: ${COLORS.brand};
  color: #fff;
  * {
    border-color: #fff;
  }
`

const StyledCheckBox = styled(CheckBoxGroup)`
  div {
    border-color: #fff !important;
  }
  input:checked + div {
    background: #fff;
  }
  svg {
    stroke: ${COLORS.brand};
  }
`

const StyledSaveButton = styled(Button)`
  background: #fff;
  color: ${COLORS.brand};
`

const StyledClearButton = styled(Button)`
  color: #fff;
  text-decoration: underline;
`

const StyledSelect = styled(Select)`
  color: #fff;
`

const StyledHr = styled.hr`
  height: 1px;
`

const Filter = () => {
  const [filters, setFilters] = useState({ localidades: [], categorias: [], tiposAtendimento: [] })
  const [localidade, setLocalidade] = useState('')
  const [categoria, setCategoria] = useState([])
  const [tipoAtendimento, setTipoAtendimento] = useState([])

  return (
    <Box>
      <DropButton
        label="Tipos Atendimento"
        dropAlign={{ top: 'bottom', right: 'right' }}
        dropContent={
          <StyledBox>
            <Box pad="medium">
              <StyledCheckBox
                value={tipoAtendimento}
                options={['Online', 'Outro']}
                onChange={({ value }) => setTipoAtendimento(value)}
              />
            </Box>
            <StyledHr color="#fff" />
            <Box pad="medium" direction="row" justify="between">
              <StyledClearButton
                size="small"
                onClick={() => {
                  setTipoAtendimento([])
                }}
              >
                Limpar
              </StyledClearButton>
              <StyledSaveButton
                size="small"
                droplet="bottom-left"
                onClick={() => {
                  setFilters({ ...filters, tiposAtendimento: tipoAtendimento })
                }}
              >
                Salvar
              </StyledSaveButton>
            </Box>
          </StyledBox>
        }
      />
      <DropButton
        label="Localidade"
        dropAlign={{ top: 'bottom', right: 'right' }}
        dropContent={
          <StyledBox>
            <Box pad="medium">
              <StyledSelect
                options={['po', 'bom', 'dia']}
                value={localidade}
                onChange={({ value }) => setLocalidade(value)}
              />
            </Box>
            <StyledHr color="#fff" />
            <Box pad="medium" direction="row" justify="between">
              <StyledClearButton
                onClick={() => {
                  setLocalidade([])
                }}
              >
                Limpar
              </StyledClearButton>
              <StyledSaveButton
                size="small"
                droplet="bottom-left"
                onClick={() => {
                  setFilters({ ...filters, localidades: [...filters.localidades, localidade] })
                }}
              >
                Salvar
              </StyledSaveButton>
            </Box>
          </StyledBox>
        }
      />
      <DropButton
        label="Categoria"
        dropAlign={{ top: 'bottom', right: 'right' }}
        dropContent={
          <StyledBox>
            <Box pad="medium">
              <CheckBoxGroup
                options={['one', 'two', 'three']}
                value={categoria}
                onChange={({ value }) => setCategoria(value)}
              />
            </Box>
            <StyledHr color="#fff" />
            <Box pad="medium" direction="row" justify="between">
              <StyledClearButton
                onClick={() => {
                  setCategoria([])
                }}
              >
                Limpar
              </StyledClearButton>
              <StyledSaveButton
                size="small"
                droplet="bottom-left"
                onClick={() => {
                  setFilters({ ...filters, categorias: categoria })
                }}
              >
                Salvar
              </StyledSaveButton>
            </Box>
          </StyledBox>
        }
      />
    </Box>
  )
}

export default Filter
