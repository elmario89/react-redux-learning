import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppsList extends Component {
    render() {
        const { apps } = this.props

        // console.log(apps)
        // apps.map(function(item, i) {
        //     return (
        //         <span>test</span>
        //     )
        // }

        return (
            <span>{apps.toString()}</span>
        )
    }

}

AppsList.propTypes = {
    apps: PropTypes.array.isRequired
}