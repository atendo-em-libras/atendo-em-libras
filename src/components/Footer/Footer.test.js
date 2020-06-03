import React from "react"
import { Footer } from "./Footer";
import { render } from "@testing-library/react"

describe("Header component", () => {
  let footerElement;

  beforeEach(() => {
    footerElement = render(<Footer />)
  });

  it("should include Atendo em Libras email with label", () => {
    expect(footerElement.getByText("Dúvidas? Entre em contato em:")).toBeInTheDocument()
    expect(footerElement.getByText("atendoemlibras@gmail.com")).toBeInTheDocument()
  });
});