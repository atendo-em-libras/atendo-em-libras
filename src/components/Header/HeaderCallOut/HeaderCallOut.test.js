import React from "react"
import { render } from "@testing-library/react"
import { HeaderCallOut } from './HeaderCallOut'

describe("HeaderCallOut component", () => {
  let headerCallOutElement;

  beforeEach(() => {
    headerCallOutElement = render(<HeaderCallOut />)
  });

  it("should render register message", () => {
      expect(headerCallOutElement.getByText("Profissionais de diverssas áreas da saúde prontos para te atender")).toBeInTheDocument()
  });
})


