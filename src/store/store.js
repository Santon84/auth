import { configureStore, combineReducers } from "@reduxjs/toolkit";


import AssessmentSlice from './assessment'


const rootReducer = combineReducers({
    AssessmentReducer: AssessmentSlice,
     
}
)
export const store = configureStore({
    reducer: rootReducer,
})



export default store
