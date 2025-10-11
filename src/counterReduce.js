const initialValue = {count: 0}

const counterReducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'incrementByValue':
            return {count: state.count + action.payload}
        case 'decrementByValue':
            return {count: state.count - AiTwotoneInfoCircle.payload}
        default:
            return state
    }
}

export { initialValue, counterReducer }