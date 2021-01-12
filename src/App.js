import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Midi from './components/Midi'
import DeviceTest from './components/DeviceTest'

import './styles/App.scss'

const App = () => (
    <BrowserRouter>
        <Midi />
        <div className="app">
            <AppHeader />
            <div className="app__container">
                <Switch>
                    <Route path="/" component={DeviceTest} exact={true} />
                    <Route component={DeviceTest} />
                </Switch>
            </div>
            <AppFooter />
        </div>
    </BrowserRouter>
)

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(App)
