import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import AppList from '../components/AppsList'
import * as pageActions from '../actions/PageActions'

class App extends Component {
    render() {
        console.log(this.props)
        const { apps, user, page } = this.props
        const { getScreens, getApps } = this.props.pageActions

        return <div className='row'>
            <User {...user} />
            <AppList {...apps} getApps={getApps} />
            <Page {...page} getSreens={getScreens} />
        </div>
    }
}

function mapStateToProps (state) {
    return {
        apps: state.appsList,
        page: state.page,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
