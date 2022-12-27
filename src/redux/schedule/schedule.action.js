import { createAction } from '../util'
import { SCHEDULE_ACTION_TYPE } from "./schedule.type"

export const setTripDescription = (payload) => {
    return createAction(SCHEDULE_ACTION_TYPE.SET_TRIP_DESCRIPTION, payload)
}

export const setTripName = (payload) => {
    return createAction(SCHEDULE_ACTION_TYPE.SET_TRIP_NAME, payload)
}