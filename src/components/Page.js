import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.textContent)
    }
    render() {
        const { year, photos, fetching } = this.props

        return <div className='ib page'>
            <p>
                <button disabled={fetching} className='btn' onClick={::this.onYearBtnClick}>2016</button>{' '}
                <button disabled={fetching} className='btn' onClick={::this.onYearBtnClick}>2015</button>{' '}
                <button disabled={fetching} className='btn' onClick={::this.onYearBtnClick}>2014</button>
            </p>
            <h3>{year} год</h3>
            {
                fetching ?
                  <p>Загрузка...</p>
                  :
                  <p>You have {photos.length} photos in {year} year!</p>
            }
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
}
