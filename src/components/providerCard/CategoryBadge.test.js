import React from "react"
import { CategoryBadge } from "./CategoryBadge"
import { render } from "@testing-library/react"

describe("CategoryBadge", () => {
  it("renders medicine correctly", () => {
    const medicineBadge = render(<CategoryBadge category="medicina" />)

    expect(medicineBadge).toMatchSnapshot()
  })

  it("renders outras correctly", () => {
    const medicineBadge = render(<CategoryBadge category="advogado" />)

    expect(medicineBadge).toMatchSnapshot()
  })
})