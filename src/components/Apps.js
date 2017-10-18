import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppsGallery from './gallery/AppsGallery'

export default class Apps extends Component {
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

        // return (
        //     <div>
        //         <div className='apps-list'>
        //             {appsTemplate}
        //         </div>
        //         <AppsGallery photos={apps[0].screens}/>
        //     </div>
        // )
        return (
            <div>
                <div className='apps-list'>
                    {appsTemplate}
                </div>
            </div>
        )
    }

}

Apps.propTypes = {
    apps: PropTypes.array.isRequired
}