import React from "react"
import { render } from "@testing-library/react"
import { ProviderList} from './ProviderList'

describe("ProviderList tests", () => {
    it("Component should render a provider card", () => {
        const providerListComponent = render(<ProviderList></ProviderList>)
        expect(providerListComponent.getByRole('provider')).toBeInTheDocument()
      })
})
