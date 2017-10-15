import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class User extends Component {
    render() {
        const { name, surname, age } = this.props

        return <div className='ib user'>
            <p>Hello, {name} {surname}, from planet Earth!!</p>
            <p>You are {age} old!!</p>
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}
