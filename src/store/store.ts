import { configureStore, combineReducers } from "@reduxjs/toolkit";


import AssessmentSlice from './assessment'


const rootReducer = combineReducers({
    AssessmentReducer: AssessmentSlice,
     
}
)
export const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>
export default store
