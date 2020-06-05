import React from 'react'
import { Grid, ResponsiveContext } from 'grommet'

class ResponsiveGrid extends React.PureComponent {
  render() {
    const { columns, rows, areas, children, props } = this.props

    return (
      <ResponsiveContext.Consumer>
        {(size) => {
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
