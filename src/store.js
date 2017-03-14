/**
 * Created by OunknownO on 21.02.2017..
 */

import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "./reducers/index"

const middleware = applyMiddleware(thunk, promise(), logger())

export default createStore( reducer, middleware)
