import React from "react"
import { CategoryBadge } from "./CategoryBadge"
import { render } from "@testing-library/react"

describe("CategoryBadge", () => {
  it("renders medicine correctly", () => {
    const medicineBadge = render(<CategoryBadge category="medicina" />)

    expect(medicineBadge).toMatchSnapshot()
  })

  it("renders advocacia as default correctly", () => {
    const lawyerBadge = render(<CategoryBadge category="advocacia" />)

    expect(lawyerBadge).toMatchSnapshot()
  })

  it("renders pessoa cuidadora correctly", () => {
    const careGiverBadge = render(<CategoryBadge category="pessoa cuidadora" />)

    expect(careGiverBadge).toMatchSnapshot()
  })

  it("renders pessoa cuidadora with upper case correctly", () => {
    const careGiverBadge = render(<CategoryBadge category="Pessoa Cuidadora" />)

    expect(careGiverBadge).toMatchSnapshot()
  })
})