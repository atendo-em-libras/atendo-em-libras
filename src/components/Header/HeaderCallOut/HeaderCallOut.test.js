import React from "react"
import { render } from "@testing-library/react"
import { HeaderCallOut } from './HeaderCallOut'

describe("HeaderCallOut component", () => {
  let headerCallOutContainer;

  beforeEach(() => {
    headerCallOutContainer = render(<HeaderCallOut />)
  });

  it("should render register message", () => {
      expect(headerCallOutContainer.getByText("Profissionais de diverssas áreas da saúde prontos para te atender")).toBeInTheDocument()
  });
})


