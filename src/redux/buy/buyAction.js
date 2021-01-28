import {BUY} from './buyTypes'
export const buy = (value) => {
    return {
        type: BUY,
        payload: value
    }
}