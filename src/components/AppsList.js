import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppsList extends Component {
    componentWillMount() {
        this.props.getApps()
    }
    render() {
        const { apps } = this.props

        // console.log(apps)
        // apps.map(function(item, i) {
        //     return (
        //         <span>test</span>
        //     )
        // }

        return (
            <div className='apps-list'>{apps.toString()}</div>
        )
    }

}

AppsList.propTypes = {
    apps: PropTypes.array.isRequired
}