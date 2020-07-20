const GoogleChart = {
  initialize: () => {
    return new Promise((resolveFn) => {
      // Execute callback if library has been loaded
      if (window.google.visualization) {
        resolveFn()
      } else {
        // Load library if it has not yet been loaded and execute
        // callback after
        window.google.charts.load('current', { packages: ['corechart'] })
        window.google.charts.setOnLoadCallback(() => {
          resolveFn()
        })
      }
    })
  },
  get: (url, queryParams = '') => {
    return new Promise((resolveFn) => {
      GoogleChart.initialize().then(() => {
        const query = new window.google.visualization.Query(url)

        return new Promise(() => {
          // Queries are done in a SQL like manner, ex.:
          // "SELECT * WHERE D = 'São Paulo'"
          // Columns must be specified using their ID, which
          // is their letter in the spreadsheet. (A, B, C... AA)
          query.setQuery(queryParams)
          query.send((response) => {
            resolveFn(response.getDataTable())
          })
        })
      })
    })
  },
}

Object.freeze(GoogleChart)
export default GoogleChart
