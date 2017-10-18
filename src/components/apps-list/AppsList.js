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
                <div key={app._id} className='apps-list-item'>
                    <a>{app.name}</a>
                </div>
            )

        })

        console.log(appsTemplate);

        return (
            <div>
                <div className='apps-list'>
                    {appsTemplate}
                </div>
                <span className='apps-gallery'>
                    gallery
                </span>
            </div>
        )
    }

}

AppsList.propTypes = {
    apps: PropTypes.array.isRequired
}