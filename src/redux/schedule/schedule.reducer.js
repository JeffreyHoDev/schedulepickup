import { SCHEDULE_ACTION_TYPE } from "./schedule.type"

const initialState = {
    tripName: "",
    description: ""
}

export const ScheduleReducer = (state=initialState, action={}) => {
    const { type, payload } = action
    switch(type){
        case SCHEDULE_ACTION_TYPE.SET_TRIP_NAME:
            return {...state, tripName: payload}
        case SCHEDULE_ACTION_TYPE.SET_TRIP_DESCRIPTION:
            return {...state, description: payload}
        default:
            return state
    }
}