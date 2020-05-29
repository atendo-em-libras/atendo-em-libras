import React from "react"
import { ProviderCard } from "./ProviderCard"
import { render } from "@testing-library/react"

describe("ProviderCard tests", () => {
  let providerCardComponent
  const name = "Luciana Andrade Souza"
  const category = "Medicina"
  const specialty = "Clínica Geral"
  const licenseNumber = "PE 16505 / RQE 11952"
  const phoneNumber = "(11) 96578 3434"
  const email = "i.standar27@fgv.com.br"

  beforeEach(() => {
    providerCardComponent = render(<ProviderCard 
                                    name={name} 
                                    category={category} 
                                    specialty={specialty} 
                                    licenseNumber={licenseNumber}
                                    phoneNumber={phoneNumber}
                                    email={email}/>)
  })

  it("Component should render name property", () => {
    expect(providerCardComponent.getByText(name)).toBeInTheDocument()
  })

  it("Component should render category property", () => {
    expect(providerCardComponent.getByText(category)).toBeInTheDocument()
  })

  it("Component should render specialty property", () => {
    expect(providerCardComponent.getByText(specialty)).toBeInTheDocument()
  })

  it("Component should render license number", () => {
    expect(providerCardComponent.getByText(licenseNumber)).toBeInTheDocument()
  })

  it("Component should render phone number", () => {
    expect(providerCardComponent.getByText(phoneNumber)).toBeInTheDocument()
  })

  it("Component should render email", () => {
    expect(providerCardComponent.getByText(email)).toBeInTheDocument()
  })

  it("Component should not render video call avallability", () => {
    expect(providerCardComponent.queryByText("Atende Online")).toBeNull()
  })

  it("Component should render video call avallability", () => {
    const providerCardComponent = render(<ProviderCard 
                                          name={name}
                                          category={category}
                                          specialty={specialty}
                                          licenseNumber={licenseNumber}
                                          videoCallAvailability={true}
                                          phoneNumber={phoneNumber}
                                          email={email} />)

    expect(providerCardComponent.getByText("Atende Online")).toBeInTheDocument()
  })
})