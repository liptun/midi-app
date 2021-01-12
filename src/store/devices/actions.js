export const devicesRequest = () => ({
    type: 'DEVICES_REQUEST',
})

export const devicesMap = (payload) => ({
    type: 'DEVICES_MAP',
    payload,
})

export const devicesError = (error) => ({
    type: 'DEVICES_ERROR',
    error,
})
