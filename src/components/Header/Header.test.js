import React from "react"
import { Header } from "./Header";
import { render } from "@testing-library/react"

describe("Header component", () => {
  let headerElement;

  beforeEach(() => {
    headerElement = render(<Header />)
  });

  it("should render register button", () => {
      expect(headerElement.getByRole('button')).toBeInTheDocument()
  });

  it("should render description heading", () => {
      expect(headerElement.getByText("Conheça profissionais de saúde que atendem em Libras")).toBeInTheDocument()
  });

  it("should render description test", () => {
      expect(headerElement.getByText("Sabemos da dificuldade de encontrar um profissional de saúde que se comunique em Libras e no atual momento em que vivemos isso se torna ainda mais difícil. Pensando nisso trouxemos alguns profissionais que atendem em Libras.")).toBeInTheDocument()
  });
});