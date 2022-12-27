import { createAction } from "../util";
import { ADD_STOP_TYPES } from './addStop.type'


export const updateLocationName = (payload) => createAction(ADD_STOP_TYPES.UPDATE_LOCATION_NAME, payload)
export const updatePostalCode = (payload) => createAction(ADD_STOP_TYPES.UPDATE_POSTAL_CODE, payload)
export const updatePickupTime = (payload) => createAction(ADD_STOP_TYPES.UPDATE_PICKUP_TIME, payload)
export const updateRemark = (payload) => createAction(ADD_STOP_TYPES.UPDATE_REMARK, payload)
export const updatePassengers = (payload) => createAction(ADD_STOP_TYPES.UPDATE_PASSENGERS, payload)
export const clearStopDetails = () => createAction(ADD_STOP_TYPES.CLEAR_INPUTS)