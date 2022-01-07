import React from 'react'
import { combineReducers } from 'redux'
import userReducer from '../reducers/reducer'
const rootReducer = combineReducers({
    data:userReducer
}) 

export default rootReducer
