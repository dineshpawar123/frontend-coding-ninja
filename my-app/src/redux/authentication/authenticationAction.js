import {
    ISAUTHERISE,
} from './authenticationType';

export const setAutherisationStatus = (payload) => {
    return {
        type: ISAUTHERISE,
        payload
    }
}