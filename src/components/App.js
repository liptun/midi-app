import React from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

import MidiDevices from './MidiDevices'

const App = () => {
    return <MidiDevices />
}

const mapStateToProps = (state) => ({
    app: state.app,
})

export default connect(mapStateToProps)(App)
