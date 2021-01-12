import React from 'react'
import { connect } from 'react-redux'
import '../styles/App.scss'

const App = (props) => {
    return (
        <div className="app">
            <div className="app__content">
                <i className="ico ico-react" />
                <h1>{props.app.title}</h1>
                <h2>
                    <pre>webpack-react-boilerplate</pre>
                </h2>
                <hr />
                <h4>
                    <strong>Featuring</strong>
                </h4>
                <ul>
                    <li>Redux</li>
                    <li>React router</li>
                    <li>SVG to iconfont</li>
                    <li>JEST testing</li>
                    <li>express.js server (for heroku)</li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    app: state.app,
})

export default connect(mapStateToProps)(App)
