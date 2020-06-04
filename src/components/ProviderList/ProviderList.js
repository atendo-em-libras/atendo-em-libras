import React, { Component } from 'react'
import { ProviderCard } from '../ProviderCard'

class ProviderList extends Component {
    render() {
        return (
            <ProviderCard
            name="Luciana Andrade Souza"
            licenseNumber="CRM 151515"
            category="Medicina"
            specialty="Clínica Geral"
            videoCallAvailability={true}
            phoneNumber={"(11) 96578 3434"}
            email={"i.standar27@fgv.com.br"}
            city="Recife"
            state="PE"
            healthInsurance="Amil, SulAmérica, Bradesco..."
            experience="“Experiência com Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo inci“Experiência com Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            address="Rua Itapevi, 67"
            videoCallPlatform="iClinic" />
        )
    }
}

export { ProviderList }