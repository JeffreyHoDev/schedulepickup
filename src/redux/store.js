import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'


const middlewares = [logger]
const composedMiddlewares = compose(applyMiddleware(...middlewares))
export const store = createStore(rootReducer, undefined, composedMiddlewares)
