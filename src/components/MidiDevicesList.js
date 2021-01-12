import React from 'react'
import { connect } from 'react-redux'

import { inputDeviceSet } from '../store/devices/actions'

import '../styles/MidiDevicesList.scss'

import MidiDevicesListColumn from './MidiDevicesListColumn'

const MidiDevicesList = ({ devices, dispatch } = {}) => {
    const { fetchingDevices, inputs, outputs, error } = devices
    return (
        <div className="midi-devices-list">
            {fetchingDevices && (
                <p className="midi-devices-list__fetching">{fetchingDevices}</p>
            )}
            {error && <p className="midi-devices-list__error">{error}</p>}
            {!fetchingDevices && !error && (
                <div className="midi-devices-list__table">
                    <MidiDevicesListColumn
                        devices={devices.inputs}
                        title="Inputs"
                        select={true}
                    />
                    <MidiDevicesListColumn
                        devices={devices.outputs}
                        title="Outputs"
                    />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    devices: state.devices,
})

export default connect(mapStateToProps)(MidiDevicesList)
