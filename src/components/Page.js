import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getSreens(+e.target.textContent)
    }
    componentWillMount() {
        this.props.getApps()
    }
    render() {
        if (this.props.apps) {
            const { apps, item, photos, fetching, appsFetching } = this.props

            console.log(apps)

            const appList = apps.map(function(item, i) {
                return (
                    <div key={item._id}>
                        <span >{item.name.toString()}</span>
                    </div>
                )
            }.bind(this));

            return <div className='ib page'>
                {appsFetching ? <span>Apps loading</span> : appList}
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
}

Page.propTypes = {
    apps: PropTypes.array.isRequired,
    item: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    appsFetching: PropTypes.bool.isRequired
}
