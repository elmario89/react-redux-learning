import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Paginator extends Component {
    render() {
        const pages = Math.ceil(this.props.totalCount / 8)
        let pagesArray = Array(pages).fill().map((e, i) => i + 1)

        const filterPages = (array, n) => {
            if (array.length <= 10) {
                return {
                    shrinked: true,
                    pages: array
                };
            }
            const offset = 4;
            let left = Math.max(n - offset, 0);
            let right = Math.min(n + offset - 1, array.length - 1);

            if (n < offset) {
                right = 2 * offset + 1;
            }

            if (n > array.length - offset) {
                left = array.length - 2 * offset;
            }
            return {
                shrinked: false,
                pages: array.slice(left, right)
            };
        }

        pagesArray = filterPages(pagesArray, 1);

        console.log(pages, pagesArray)
        return (
            <div className='paginator'>
                <a className='paginator-item -prev'> prev </a>
                <a className='paginator-item'>1</a>
                <a className='paginator-item'>2</a>
                <a className='paginator-item'>3</a>
                <a className='paginator-item'>4</a>
                <a className='paginator-item'>5</a>
                <a className='paginator-item'>{pages}</a>
                <a className='paginator-item -next'> next </a>
            </div>
        )
    }
}

Paginator.propTypes = {
    totalCount: PropTypes.number.isRequired
}