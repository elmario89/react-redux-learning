import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class User extends Component {
    render() {
        const { name, surname, age } = this.props

        return <div>
            Hello, {name} {surname}, from planet Earth!!
            <br/>
            You are {age} old!!
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}