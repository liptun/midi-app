import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './icons.font'

import './styles/reset.scss'

import Router from './Router'
import configureStore from './store'
const store = configureStore()

const appRoot = (
    <Provider store={store}>
        <Router />
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'))
