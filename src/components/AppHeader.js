import React from 'react'
import '../styles/AppHeader.scss'

const AppHeader = () => {
    return (
        <div className="app__header">
            <div className="app__brand">
                <i className="ico ico-midi" />
            </div>
            <ul className="app__navbar">
                <li>
                    <a
                        href="https://github.com/liptun/midi-app"
                        target="_blank"
                        rel="noopener"
                    >
                        My GitHub
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AppHeader
