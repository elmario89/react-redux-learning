import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppsGallery from './gallery/AppsGallery'

export default class Apps extends Component {
    componentWillMount() {
        this.props.getApps()
    }
    render() {
        const { apps } = this.props

        console.log(apps)
        var appsTemplate = apps.map((app) => {
            return (
                <div key={app._id} className='apps-list-item'>
                    <a>{app.name}</a>
                </div>
            )
        })

        return (
            <div>
                <div className='apps-list'>
                    {appsTemplate}
                </div>
                {apps.length > 0 ? <AppsGallery photos={apps[0].screens}/> : ''}

            </div>
        )
    }

}

Apps.propTypes = {
    apps: PropTypes.array.isRequired
}