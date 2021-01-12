import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './components/App'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route component={App} />
        </Switch>
    </BrowserRouter>
)
export default Router
