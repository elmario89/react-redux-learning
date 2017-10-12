import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    onYearBtnClick(e) {
        console.log(this.props)
        this.props.setYear(+e.target.textContent)
    }
    render() {
        const { year, photos } = this.props
        return <div>
            <p>
                <button onClick={::this.onYearBtnClick}>2016</button>
                <button onClick={::this.onYearBtnClick}>2015</button>
                <button onClick={::this.onYearBtnClick}>2014</button>
            </p>
            You have {photos.length} photos in {year} year!
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
}