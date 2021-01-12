import React from 'react'
import { connect } from 'react-redux'

import '../styles/MidiDevicesList.scss'

const MidiDevicesListColumn = ({ devices, title, select = false } = {}) => (
    <div className="midi-devices-list__column">
        <h2>{title}</h2>
        {devices.length === 0 && (
            <span className="midi-devices-list__null">
                No devices found <br></br>
                <small>check USB connection</small>
            </span>
        )}
        {devices.map((device, index) => (
            <MidiDevicesListItem device={device} key={index} select={select} />
        ))}
    </div>
)

const MidiDevicesListItem = ({ device, select = false } = {}) => {
    const { name, manufacturer } = device
    return (
        <div className="midi-devices-list__item">
            <div className="midi-devices-list__item__text">
                <span className="midi-devices-list__item__name">{name}</span>
                <span className="midi-devices-list__item__manufacturer">
                    {manufacturer}
                </span>
            </div>
            {select && (
                <button title="Select this device">
                    <i className="ico ico-midi" />
                </button>
            )}
        </div>
    )
}

const MidiDevicesList = ({ devices } = {}) => {
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
