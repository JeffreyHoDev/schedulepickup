import { ADD_STOP_TYPES } from './addStop.type'

export const INITIAL_STATE = {
    "locationName": "",
    "passengers": [],
    "postalCode": 0,
    "pickupTime": "",
    "remark": ""
}

export const AddStopReducer = (state=INITIAL_STATE, action={}) => {
    const { type, payload } = action
    switch(type){
        case ADD_STOP_TYPES.UPDATE_LOCATION_NAME:
            return { ...state, locationName: payload}
        case ADD_STOP_TYPES.UPDATE_POSTAL_CODE:
            return { ...state, postalCode: payload}
        case ADD_STOP_TYPES.UPDATE_PICKUP_TIME:
            return { ...state, pickupTime: payload}
        case ADD_STOP_TYPES.UPDATE_REMARK:
            return { ...state, remark: payload}
        case ADD_STOP_TYPES.UPDATE_PASSENGERS:
            return {...state, passengers: payload}
        case ADD_STOP_TYPES.CLEAR_INPUTS:
            return INITIAL_STATE
        default:
            return state
    }
}