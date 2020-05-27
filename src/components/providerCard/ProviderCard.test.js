import React from "react"
import { ProviderCard } from "./ProviderCard"
import { render } from "@testing-library/react"

describe("ProviderCard tests", () => {
  it("Component should receive provider name as property", () => {
    // Given a name
    const name = "Some Provider Name"
    // When I render the component
    const container = render(<ProviderCard name={name} />)
    // Then the given name is printed inside
    expect(container.getByText(name)).toBeInTheDocument()
  })
})