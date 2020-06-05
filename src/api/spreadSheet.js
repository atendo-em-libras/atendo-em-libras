import toJson from 'csvtojson'
import request from 'request'

async function getSpreadSheetResource(spreadSheetKey, sheetName) {
  const spreadSheetUrl = `https://docs.google.com/spreadsheets/d/${spreadSheetKey}/gviz/tq?tqx=out:csv&sheet=${sheetName}`
  const json = await toJson().fromStream(request.get(spreadSheetUrl))
  return json
}

export async function getServiceProviders() {
  const professionalsSpreadSheetKey = '1rRGYf7ynJ6srpk9ryab4OWtuNdLgpPDEjGSMNaoyTcM'
  const professionalsSheetName = 'Form Responses 1'
  return await getSpreadSheetResource(professionalsSpreadSheetKey, professionalsSheetName)
}
