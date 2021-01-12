import React from 'react'
import { connect } from 'react-redux'
import MidiDevicesListItem from './MidiDevicesListItem'

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

export default MidiDevicesListColumn
