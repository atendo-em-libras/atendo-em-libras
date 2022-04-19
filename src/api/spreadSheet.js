import toJson from 'csvtojson'
import axios from 'axios'

async function getSpreadSheetResource(spreadSheetKey, sheetName) {
  const spreadSheetUrl = `https://docs.google.com/spreadsheets/d/${spreadSheetKey}/gviz/tq?tqx=out:csv&sheet=${sheetName}`
  const result = await axios.get(spreadSheetUrl)

  return toJson().fromString(result.data)
}

async function getServiceProviders() {
  const professionalsSpreadSheetKey = process.env.REACT_APP_PROFESSIONAL_SPREADSHEET_KEY
  const professionalsSheetName = process.env.REACT_APP_PROFESSIONAL_SHEET_NAME
  try {
    return await getSpreadSheetResource(professionalsSpreadSheetKey, professionalsSheetName)
  } catch (error) {
    return {}
  }
}

export { getServiceProviders }
