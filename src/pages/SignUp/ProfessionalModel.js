const ProfessionalModel = {
  createModel(professional) {
    let professionalModel = {
      name: professional.name,
      biography: professional.biography,
      category: professional.category.Id,
      specialty: professional.specialty,
      registerNumber: professional.registerNumber,
      healthInsurance: professional.healthInsurancePlans,
      email: professional.email,
      phone: professional.phone,
      attendance: {
        onlineAttendance: null,
        hospitalClinicAttendance: null,
        householdAttendance: null,
      },
      termsAndCoditions: professional.termsAndConditions,
      adminApproved: false,
      referred: false,
    }

    if (professional.onlineAttendanceOption) {
      professionalModel.attendance.onlineAttendance = {
        hasOnlineAttendance: professional.onlineAttendanceOption,
        whatsAppNumber: professional.whatsappNumber,
      }
    }

    if (professional.householdAttendanceOption) {
      professionalModel.attendance.householdAttendance = {
        state: professional.householdState,
        city: professional.householdCity,
      }
    }

    if (professional.hospitalclinicAttendanceOption) {
      professionalModel.attendance.hospitalClinicAttendance = {
        CEP: professional.hospitalClinicCep,
        state: professional.hospitalClinicState,
        stateInitals: professional.hospitalClinicState,
        city: professional.hospitalClinicCity,
        streetName: professional.hospitalClinicStreetName,
        streetNumber: professional.hospitalClinicStreetNumber,
        complementInfo: professional.hospitalClinicComplementInfo,
        name: professional.hospitalClinicName,
        phone: professional.hospitalClinicPhone,
        email: professional.hospitalClinicEmail,
      }
    }

    return professionalModel
  },
}
export default ProfessionalModel
