import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppsGallery from './gallery/AppsGallery'
import Paginator from 'src/components/gallery/Paginator'

export default class Apps extends Component {
    componentWillMount() {
        this.props.getApps(0)
    }

    loadScreens(index) {
        this.props.changeApp(index)
    }

    paginate(page) {
        this.props.getApps(page)
    }

    render() {
        const { apps, totalCount, pageNumber } = this.props

        var appsTemplate = apps.map((app, index) => {
            return (
                <div key={app._id} className={'apps-list-item ' + (index === pageNumber ? '-active' : '')}>
                    <a onClick={this.loadScreens.bind(this, index)}>{app.name}</a>
                </div>
            )
        })

        return (
            <div>
                <div className='apps-list'>
                    {appsTemplate}
                </div>
                {apps.length > 0 ? <AppsGallery photos={apps[pageNumber].screens}/> : ''}
                <Paginator totalCount={totalCount} />
            </div>
        )
    }

}

Apps.propTypes = {
    apps: PropTypes.array.isRequired
}
