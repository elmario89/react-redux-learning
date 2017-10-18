import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppsGallery extends Component {
    render() {
        const { photos } = this.props

        const galleryTemplate = photos.map((photo) => {
            return (
                <div key={photo._id} className='apps-gallery-item'>
                    <img src={photo.url} />
                </div>
            )
        })

        return (
            <div className='apps-gallery'>
                {galleryTemplate}
            </div>
        )
    }

}

AppsGallery.propTypes = {
    photos: PropTypes.array.isRequired
}