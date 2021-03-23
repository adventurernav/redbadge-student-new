import React, { Component } from 'react'

export default class PropsMapping extends Component {
    render() {
        const visitedPlaces = () => this.props.visited.map(place =>  <li>{place}</li>)
        return (
            <div>
                I have been to these places:
                <ul>
                    {visitedPlaces()}
                </ul>
            </div>
        )
    }
}
