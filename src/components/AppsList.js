import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppsList extends Component {
    componentWillMount() {
        this.props.getApps()
    }
    render() {
        const { apps } = this.props

        var appsTemplate = apps.map((app) => {
            return (
                <div key={app._id}>
                    <span className='apps-list'>{app.name}</span>
                </div>
            )

        })

        console.log(appsTemplate);

        return (
            <div>
                {appsTemplate}
            </div>
        )
    }

}

AppsList.propTypes = {
    apps: PropTypes.array.isRequired
}