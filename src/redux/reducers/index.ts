import { combineReducers } from "@reduxjs/toolkit";


import assessmentReducer from './assessment'
import questionReducer from "./question";

const rootReducer = combineReducers({
    assessment: assessmentReducer,
    question: questionReducer
});

export default rootReducer;