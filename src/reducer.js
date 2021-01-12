const reducerDefaultState = {
    title: 'Hello, React!',
}

export default (state = reducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
