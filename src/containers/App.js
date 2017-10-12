import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'

class App extends Component {
    render() {
        const { user, page } = this.props

        return <div>
            <User {...user} />
            <Page {...page} />
        </div>
    }
}

function mapStateToProps (state) {
    return {
        page: state.page,
        user: state.user
    }
}

export default connect(mapStateToProps)(App)
