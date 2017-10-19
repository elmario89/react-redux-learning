import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Paginator extends Component {
    render() {
        const pages = Math.ceil(this.props.totalCount / 8)
        console.log(pages)
        return (
            <div className='paginator'>
                <a className='paginator-item -prev'> prev </a>
                <a className='paginator-item'>1</a>
                <a className='paginator-item'>2</a>
                <a className='paginator-item'>3</a>
                <a className='paginator-item'>4</a>
                <a className='paginator-item'>5</a>
                <a className='paginator-item -next'> next </a>
            </div>
        )
    }
}

Paginator.propTypes = {
    totalCount: PropTypes.number.isRequired
}