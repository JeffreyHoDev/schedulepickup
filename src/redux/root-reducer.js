import { combineReducers } from "redux"
import { ScheduleReducer } from './schedule/schedule.reducer'
import { AddStopReducer } from './addStop/addStop.reducer'

export const rootReducer = combineReducers({
    schedule: ScheduleReducer,
    addStop: AddStopReducer
})