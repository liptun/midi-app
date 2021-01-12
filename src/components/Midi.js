import React, { useEffect, useState } from 'react'
import '../styles/midi-device-item.scss'

const MidiDeviceItem = ({ device } = {}) => {
    console.log(device)
    return (
        <div className="midi-device-item">
            <p>Name: {device.name}</p>
            <p>ID: {device.id}</p>
            <p>Manufacturer: {device.manufacturer}</p>
            <p>State: {device.state}</p>
            <p>Type: {device.type}</p>
        </div>
    )
}

const Midi = () => {
    const onMidiMessage = (message) => {
        message.data.length > 1 &&
            console.warn('midi message', Array.from(message.data))
        // console.warn('midi message', message.data, message.timeStamp, message)
    }

    const [midiInputs, setMidiInputs] = useState([])
    const [midiOutputs, setMidiOutputs] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const mapMidiDevices = (midiAccess) => {
        console.log('mapMidiDevices')
        setMidiInputs(Array.from(midiAccess.inputs.values()))
        setMidiOutputs(Array.from(midiAccess.outputs.values()))
    }

    useEffect(() => {
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
                setErrorMessage('MIDI request error')
            })
    }, [])

    useEffect(() => {
        midiInputs.forEach((device) => (device.onmidimessage = onMidiMessage))
    }, [midiInputs])

    return (
        <>
            <h1>MIDI</h1>
            {errorMessage && <p style="color: red">{errorMessage}</p>}
            <div>
                <p>MIDI inputs</p>
                {midiInputs &&
                    midiInputs.map((device, index) => (
                        <MidiDeviceItem device={device} key={index} />
                    ))}
            </div>
            <div>
                <p>MIDI outputs</p>
                {midiOutputs &&
                    midiOutputs.map((device, index) => (
                        <MidiDeviceItem device={device} key={index} />
                    ))}
            </div>
        </>
    )
}

export default Midi
