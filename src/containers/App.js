import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from 'src/components/User'
import Page from 'src/components/Page'
import AppList from 'src/components/apps-list/AppsList'
import * as pageActions from 'src/actions/PageActions'
import * as appsListActions from 'src/actions/AppsListActions'

class App extends Component {
    render() {
        const { apps, user, page } = this.props
        const { getScreens} = this.props.pageActions
        const { getApps } = this.props.appsListActions

        return <div>
            <User {...user} />
            <div className='apps-wrapper'>
                <AppList {...apps} getApps={getApps} />
            </div>
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
        pageActions: bindActionCreators(pageActions, dispatch),
        appsListActions: bindActionCreators(appsListActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
