import {
    ISAUTHERISE
} from './authenticationType'

const initialState = {
    isAutherise: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ISAUTHERISE:
            return {
                ...state,
                isAutherise: action.payload
            }
        default: return state;
    }
}

export default reducer;