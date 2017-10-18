import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppsGallery extends Component {
    // componentWillMount() {
    //     this.props.getApps()
    // }
    render() {
        const { photos } = this.props
        //
        // var appsTemplate = apps.map((app) => {
        //     return (
        //         <div key={app._id} className='apps-list-item'>
        //             <a>{app.name}</a>
        //         </div>
        //     )
        // })
        //
        // return (
        //     <div>
        //         <div className='apps-list'>
        //             {appsTemplate}
        //         </div>
        //         <AppsGallery />
        //     </div>
        // )
        return (
            <span>{photos}</span>
        )
    }

}

AppsGallery.propTypes = {
    photos: PropTypes.array.isRequired
}