import React from 'react'
import { Grid, ResponsiveContext } from 'grommet'

class ResponsiveGrid extends React.PureComponent {
  render() {
    const { columns, rows, areas, children, props, justify = 'stretch', gapRow = 'none', gapCol = 'none' } = this.props

    return (
      <ResponsiveContext.Consumer>
        {(size = 'large') => {
          let columnsVal = columns
          if (columns) {
            if (columns[size]) {
              columnsVal = columns[size]
            }
          }

          let rowsVal = rows
          if (rows) {
            if (rows[size]) {
              rowsVal = rows[size]
            }
          }

          let areasVal = areas
          if (areas && !Array.isArray(areas)) areasVal = areas[size]

          return (
            <Grid
              {...props}
              areas={!areasVal ? undefined : areasVal}
              rows={!rowsVal ? size : rowsVal}
              columns={!columnsVal ? size : columnsVal}
              justify={justify}
              gap={{ row: gapRow, column: gapCol }}
            >
              {children}
            </Grid>
          )
        }}
      </ResponsiveContext.Consumer>
    )
  }
}

export default ResponsiveGrid
