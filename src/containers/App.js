import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
    render() {
        const { user, page } = this.props
        const { getScreens, getApps } = this.props.pageActions

        return <div className='row'>
            <User {...user} />
            <Page {...page} getSreens={getScreens} getApps={getApps}/>
        </div>
    }
}

function mapStateToProps (state) {
    return {
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
