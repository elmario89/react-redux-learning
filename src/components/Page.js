import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    render() {
        const { year, photos } = this.props
        return <div>
            You have {photos.length} photos in {year} year!
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
}