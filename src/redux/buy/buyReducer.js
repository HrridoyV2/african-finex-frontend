import { BUY } from "../sell/sellTypes";

const initialState = {
    one: ''
}

const buyReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY: return {
            ...state,
            one: action.payload
        }
        default: return state
    }
}

export default buyReducer;