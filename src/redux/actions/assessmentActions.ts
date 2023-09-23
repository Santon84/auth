import * as api from "../api/assessmentAPI";
import * as types from "../types/assessmentTypes";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";

export const getAssessmentsActions = () => async (dispatch: Dispatch<AnyAction>) => {
   
    try {
        dispatch({
            type: types.GET_ASSESSMENTS_START,
        });  
        const { data, error } = await api.getAssessmentList();

        if (error) {
            throw new Error(error);
        }
  
        dispatch({
            type: types.GET_ASSESSMENTS_SUCCESS,
            payload: data,
          });
    } catch (error) {
        dispatch({
            type: types.GET_ASSESSMENTS_FAIL,
            payload: error,
          });
       console.log(error);
    }
  };



export default getAssessmentsActions
