import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
    devicesRequest,
    devicesMap,
    devicesError,
} from '../store/devices/actions'

const Midi = (props) => {
    const mapMidiDevices = (midiAccess) => {
        const devices = {
            inputs: Array.from(midiAccess.inputs.values()),
            outputs: Array.from(midiAccess.outputs.values()),
        }
        props.dispatch(devicesMap(devices))
    }

    useEffect(() => {
        props.dispatch(devicesRequest())
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
    }, [])

    return null
}

const mapStateToProps = (state) => ({
    devices: state.devices,
})

export default connect(mapStateToProps)(Midi)
