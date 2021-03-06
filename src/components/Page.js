import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getSreens(+e.target.textContent)
    }
    render() {
        const { item, photos, fetching } = this.props

        return <div className='ib page'>
            <p>
                <button disabled={fetching} className='btn' onClick={::this.onYearBtnClick}>1</button>{' '}
                <button disabled={fetching} className='btn' onClick={::this.onYearBtnClick}>2</button>{' '}
                <button disabled={fetching} className='btn' onClick={::this.onYearBtnClick}>3</button>
            </p>
            <h3>{item} item</h3>
            {
                fetching ?
                    <p>Загрузка...</p>
                    :
                    <p>You have {photos.length} screens in {item} item</p>
            }
        </div>
    }
}

Page.propTypes = {
    item: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
}
