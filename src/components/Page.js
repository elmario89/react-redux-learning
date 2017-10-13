import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.setYear(+e.target.textContent)
    }
    render() {
        const { year, photos } = this.props

        return <div className='ib page'>
            <p>
                <button className='btn' onClick={::this.onYearBtnClick}>2016</button>{' '}
                <button className='btn' onClick={::this.onYearBtnClick}>2015</button>{' '}
                <button className='btn' onClick={::this.onYearBtnClick}>2014</button>
            </p>
            <h3>{year} год</h3>
            <p>You have {photos.length} photos in {year} year!</p>
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
}
