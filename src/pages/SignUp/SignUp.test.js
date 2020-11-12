import React from 'react'
import { SignUp } from './SignUp'
import { render } from '@testing-library/react'

describe('SignUp', () => {
  let wrapper
  beforeEach(() => {
    wrapper = render(<SignUp />)
  })
  it('Has a Nome completo field', () => {
    const textbox = wrapper.getByLabelText('Nome completo Obrigatório')
    expect(textbox).toBeTruthy()
  })
  // describe('Attendances', () => {
  //   it('Has OnlineAttendence fields when Online is selected', () => {
  //     const onlineAttendance = wrapper.getByTestId('online-attendance')
  //     expect(onlineAttendance).toBeVisible()
  //   })
  //   it('Has HospitalClinicAttendence fields when Hospital Clinic is selected', () => {
  //     const hospitalClinicAttendance = wrapper.getByTestId('hospitalclinic-attendance')
  //     expect(hospitalClinicAttendance).toBeVisible()
  //   })
  //   it('Has HouseholdAttendance fields when Household is selected', () => {
  //     const householdAttendance = wrapper.getByTestId('household-attendance')
  //     expect(householdAttendance).toBeVisible()
  //   })
  // })
})
