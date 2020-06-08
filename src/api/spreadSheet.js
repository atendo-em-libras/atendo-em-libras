import toJson from 'csvtojson'
import axios from 'axios'

async function getSpreadSheetResource(spreadSheetKey, sheetName) {
  const spreadSheetUrl = `https://docs.google.com/spreadsheets/d/${spreadSheetKey}/gviz/tq?tqx=out:csv&sheet=${sheetName}`
  const result = await axios.get(spreadSheetUrl)
  return toJson().fromString(result.data)
}

export async function getServiceProviders() {
  const professionalsSpreadSheetKey = '1rRGYf7ynJ6srpk9ryab4OWtuNdLgpPDEjGSMNaoyTcM'
  const professionalsSheetName = 'Form Responses 1'
  try {
    return await getSpreadSheetResource(professionalsSpreadSheetKey, professionalsSheetName)
  } catch (error) {
    console.log(error)
    return {}
  }
}