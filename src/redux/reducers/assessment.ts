
import { PayloadAction} from '@reduxjs/toolkit'
import * as types from "../types/assessmentTypes";
import { AssessmentData } from '../../types/types';





export interface IAssessmentState {
    items: AssessmentData[],
    current: AssessmentData | null,
    loading: boolean,
    error: string

}
const initialState: IAssessmentState = {
    items: [],
    current: null,
    loading: true,
    error: ''

}

const assessmentReducer = (state = initialState, action:PayloadAction<AssessmentData>) => {
    const { type, payload } = action;
  
    switch (type) {
        case types.GET_ASSESSMENTS_START:
        case types.CREATE_ASSESSMENT_START:
            return {
                ...state,
                loading : true,
            };
        case types.GET_ASSESSMENTS_SUCCESS:
            return {
                ...state,
                items : payload,
                loading : false,
            }
        case types.CREATE_ASSESSMENT_SUCCESS:
            
            return {
                ...state,
                items : [payload, ...state.items],
                loading : false,
            }
        default:
            return state;
    }
}

  export default assessmentReducer
  