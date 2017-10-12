import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const { name, surname, age } = this.props.data.user
        const { year, photos} = this.props.data.page

        return <div>
                    Hello, {name} {surname}, from planet Earth!!
                    <br/>
                    You are {age} old!
                    <br/>
                    You have {photos.length} photos in {year} year
               </div>
    }
}

function mapStateToProps (state) {
    return {
        data: state
    }
}

export default connect(mapStateToProps)(App)
