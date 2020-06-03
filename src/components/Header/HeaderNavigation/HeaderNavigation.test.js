import React from "react"
import { render } from "@testing-library/react"
import { HeaderNavigation } from './HeaderNavigation'

describe("HeaderNavigation component", () => {
  let headerNavigationContainer;

  beforeEach(() => {
    headerNavigationContainer = render(<HeaderNavigation />)
  });

  it("should render register message", () => {
      expect(headerNavigationContainer.getByText("É profissional de saúde ou conhece alguém da área?")).toBeInTheDocument()
  });
})