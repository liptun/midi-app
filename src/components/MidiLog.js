import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import '../styles/MidiLog.scss'

const MidiLog = ({ devices } = {}) => {
    const { activeInput } = devices
    const lastMidiMessage = useRef(null)
    const [log, setLog] = useState([])

    const mapMidiDevices = (midiAccess) => {
        Array.from(midiAccess.inputs.values()).forEach((device) => {
            if (device.id === activeInput.id) {
                device.onmidimessage = onMidiMessage
            }
        })
    }

    const onMidiMessage = (message) => {
        lastMidiMessage.current = message
    }

    useEffect(() => {
        setLog([lastMidiMessage.current, ...log])
        // console.log(lastMidiMessage.current)
    }, [lastMidiMessage.current])

    useEffect(() => {
        if (activeInput) {
            navigator
                .requestMIDIAccess()
                .then((access) => {
                    mapMidiDevices(access)
                    access.onstatechange = () => {
                        mapMidiDevices(access)
                    }
                })
                .catch((error) => {
                    console.error('MIDI request error', error)
                    props.dispatch(devicesError('MIDI request error'))
                })
        }
    }, [activeInput])

    if (!activeInput) {
        return null
    }
    return (
        <div className="midi-log">
            <pre>activeInput: {activeInput.id}</pre>
            {log.map((el, index) => (
                <div key={index}>
                    <i className="ico ico-midi" />
                    {el && el}
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    devices: state.devices,
})

export default connect(mapStateToProps)(MidiLog)
