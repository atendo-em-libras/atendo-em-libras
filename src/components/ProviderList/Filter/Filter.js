import React, { useState } from 'react'
import { CheckBoxGroup, DropButton, Button, Select, Box } from 'grommet'

const Filter = () => {
  const [filters, setFilters] = useState({ localidades: [], categorias: [], tiposAtendimento: [] })
  const [localidade, setLocalidade] = useState('')
  const [categoria, setCategoria] = useState([])
  const [tipoAtendimento, setTipoAtendimento] = useState([])

  console.log(filters)

  return (
    <Box>
      <DropButton
        label="Tipos Atendimento"
        dropAlign={{ top: 'bottom', right: 'right' }}
        dropContent={
          <>
            <CheckBoxGroup
              value={tipoAtendimento}
              options={['Online', 'Outro']}
              onChange={({ value }) => setTipoAtendimento(value)}
            />
            <Button
              onClick={() => {
                setTipoAtendimento([])
              }}
            >
              Limpar
            </Button>
            <Button
              onClick={() => {
                setFilters({ ...filters, tiposAtendimento: tipoAtendimento })
              }}
            >
              Salvar
            </Button>
          </>
        }
      />
      <DropButton
        label="Localidade"
        dropAlign={{ top: 'bottom', right: 'right' }}
        dropContent={
          <>
            <Select options={['po', 'bom', 'dia']} value={localidade} onChange={({ value }) => setLocalidade(value)} />

            <Button
              onClick={() => {
                setLocalidade('')
              }}
            >
              Limpar
            </Button>
            <Button
              onClick={() => {
                setFilters({ ...filters, localidades: [...filters.localidades, localidade] })
              }}
            >
              Salvar
            </Button>
          </>
        }
      />
      <DropButton
        label="Categoria"
        dropAlign={{ top: 'bottom', right: 'right' }}
        dropContent={
          <>
            <CheckBoxGroup
              options={['one', 'two', 'three']}
              value={categoria}
              onChange={({ value }) => setCategoria(value)}
            />

            <Button
              onClick={() => {
                setCategoria([])
              }}
            >
              Limpar
            </Button>
            <Button
              onClick={() => {
                setFilters({ ...filters, categorias: categoria })
              }}
            >
              Salvar
            </Button>
          </>
        }
      />
    </Box>
  )
}

export default Filter
