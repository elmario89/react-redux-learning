import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from 'src/components/User'
import Page from 'src/components/Page'
import Apps from 'src/components/Apps'
import * as pageActions from 'src/actions/PageActions'
import * as appsListActions from 'src/actions/AppsActions'

class App extends Component {
    render() {
        const { apps, user, page } = this.props
        const { getScreens } = this.props.pageActions
        const { getApps, changeApp } = this.props.appsListActions

        return <div>
            <User {...user} />
            <div className='apps-wrapper'>
                <Apps {...apps} getApps={getApps} changeApp={changeApp}/>
            </div>
            <Page {...page} getSreens={getScreens} />
        </div>
    }
}

function mapStateToProps (state) {
    return {
        apps: state.apps,
        totalCount: state.totalCount,
        page: state.page,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        appsListActions: bindActionCreators(appsListActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
