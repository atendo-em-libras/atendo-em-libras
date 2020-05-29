import React from "react"
import { ProviderCard } from "./ProviderCard"
import { render } from "@testing-library/react"

describe("ProviderCard tests", () => {
  let providerCardComponent
  const name = "Luciana Andrade Souza"
  const category = "Medicina"
  const specialty = "Clínica Geral"
  const licenseNumber = "PE 16505 / RQE 11952"

  beforeEach(() => {
    providerCardComponent = render(<ProviderCard 
                                    name={name} 
                                    category={category} 
                                    specialty={specialty} 
                                    licenseNumber={licenseNumber}/>)
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

  it("Component should not render video call avallability", () => {
    expect(providerCardComponent.queryByText("Atende Online")).toBeNull()
  })

  it("Component should render video call avallability", () => {
    const providerCardComponent = render(<ProviderCard 
                                          name={name}
                                          category={category}
                                          specialty={specialty}
                                          licenseNumber={licenseNumber}
                                          videoCallAvailability={true} />)

    expect(providerCardComponent.getByText("Atende Online")).toBeInTheDocument()
  })
})