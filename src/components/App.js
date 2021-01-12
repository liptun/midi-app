import React from 'react'
import { connect } from 'react-redux'

import Midi from './Midi'

const App = (props) => {
    return (
        <>
            <Midi />
        </>
    )
}

const mapStateToProps = (state) => ({
    app: state.app,
})

export default connect(mapStateToProps)(App)
