import React from 'react'
import { connect } from 'react-redux'
import { inputDeviceSet } from '../store/devices/actions'

const MidiDevicesListItem = ({
    device,
    select = false,
    dispatch,
    devices,
} = {}) => {
    const { name, manufacturer } = device
    const onDeviceSelectHandle = () => {
        dispatch(inputDeviceSet(device))
    }
    return (
        <div className="midi-devices-list__item">
            <div className="midi-devices-list__item__text">
                <span className="midi-devices-list__item__name">{name}</span>
                <span className="midi-devices-list__item__manufacturer">
                    {manufacturer}
                </span>
            </div>
            {select && (
                <button
                    title="Select this device"
                    onClick={onDeviceSelectHandle}
                    className={
                        devices.activeInput &&
                        devices.activeInput.id === device.id
                            ? 'active'
                            : ''
                    }
                >
                    <i className="ico ico-midi" />
                </button>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    devices: state.devices,
})

export default connect(mapStateToProps)(MidiDevicesListItem)
