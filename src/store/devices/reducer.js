const defaultState = {
    fetchingDevices: false,
    inputs: [],
    outputs: [],
    error: '',
}

const mapDevice = (device) => ({
    id: device.id,
    name: device.name,
    type: device.type,
    state: device.state,
    version: device.version,
    manufacturer: device.manufacturer,
    connection: device.connection,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'DEVICES_REQUEST':
            return {
                ...state,
                fetchingDevices: true,
            }
        case 'DEVICES_ERROR':
            return {
                ...state,
                fetchingDevices: false,
                error: action.error,
            }
        case 'DEVICES_MAP':
            return {
                ...state,
                fetchingDevices: false,
                inputs: action.payload.inputs.map(mapDevice),
                outputs: action.payload.outputs.map(mapDevice),
            }
        default:
            return state
    }
}
