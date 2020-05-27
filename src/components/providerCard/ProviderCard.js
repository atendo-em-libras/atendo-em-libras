import React from 'react'

export class ProviderCard extends React.Component {
    render() {
        const {name} = this.props
        return (
            <div>
            <h1>{ name }</h1>
            </div>
        )
    }
}