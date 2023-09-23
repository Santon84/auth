import { combineReducers } from "@reduxjs/toolkit";


import assessmentReducer from './assessment'

const rootReducer = combineReducers({
    assessment: assessmentReducer,
});

export default rootReducer;