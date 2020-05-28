import React from "react"
import { ProviderCard } from "./ProviderCard"
import { render } from "@testing-library/react"

describe("ProviderCard tests", () => {
  let providerCardComponent
  const name = "Luciana Andrade Souza"
  const category = "Medicina"
  const speciality = "Clínica Geral"

  beforeEach(() => {
    providerCardComponent = render(<ProviderCard name={name} category={category} speciality={speciality} />)
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
})