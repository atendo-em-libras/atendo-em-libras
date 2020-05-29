import React from "react"
import AppHeader from "./AppHeader";
import { render } from "@testing-library/react"

describe("AppHeader tests", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = render(<AppHeader/>)
    });

    it("Component should render register message", () => {
        expect(wrapper.getByText("É profissional de saúde ou conhece alguém da área?")).toBeInTheDocument()
    });

    it("Component should render register button", () => {
        expect(wrapper.getByRole('button')).toBeInTheDocument()
    });

    it("Component should render description heading", () => {
        expect(wrapper.getByText("Conheça profissionais de saúde que atendem em Libras")).toBeInTheDocument()
    });

    it("Component should render description test", () => {
        expect(wrapper.getByText("Sabemos da dificuldade de encontrar um profissional de saúde que se comunique em Libras e no atual momento em que vivemos isso se torna ainda mais difícil. Pensando nisso trouxemos alguns profissionais que atendem em Libras.")).toBeInTheDocument()
    });

});