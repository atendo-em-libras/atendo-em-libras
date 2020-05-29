import React from "react"
import { ProviderCard } from "./ProviderCard"
import { render } from "@testing-library/react"

describe("ProviderCard tests", () => {
  let providerCardComponent
  const name = "Luciana Andrade Souza"
  const category = "Medicina"
  const speciality = "Clínica Geral"
  const licenseNumber = "PE 16505 / RQE 11952"

  beforeEach(() => {
    providerCardComponent = render(<ProviderCard 
                                    name={name} 
                                    category={category} 
                                    speciality={speciality} 
                                    licenseNumber={licenseNumber}/>)
  })

  it("Component should render name property", () => {
    expect(providerCardComponent.getByText(name)).toBeInTheDocument()
  })

  it("Component should render category property", () => {
    expect(providerCardComponent.getByText(category)).toBeInTheDocument()
  })

  it("Component should render speciality property", () => {
    expect(providerCardComponent.getByText(speciality)).toBeInTheDocument()
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
                                          speciality={speciality}
                                          licenseNumber={licenseNumber}
                                          videoCallAvaillability={true} />)

    expect(providerCardComponent.getByText("Atende Online")).toBeInTheDocument()
  })
})