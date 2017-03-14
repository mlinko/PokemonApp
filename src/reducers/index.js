/**
 * Created by OunknownO on 21.02.2017..
 */

        import { combineReducers } from "redux"

        import reducer, {reducerAList, mPkArray} from "./pokemon-apiReducers"

        export default combineReducers({
            reducer,
            reducerAList,
            mPkArray
        })


