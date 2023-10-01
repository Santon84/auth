import { AssessmentData } from "types/types";
import * as api from "../api/assessmentAPI";
import * as types from "../types/assessmentTypes";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";

export const getAssessmentsAction = (userId:string) => async (dispatch: Dispatch<AnyAction>) => {
   
    try {
        dispatch({
            type: types.GET_ASSESSMENTS_START,
        });  
        const { data, error } = await api.getAssessmentList(userId);

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

  export const createAssessmentActions = (newAssessment:AssessmentData, userId:string) => async (dispatch: Dispatch<AnyAction>) => {
   
    try {
        dispatch({
            type: types.CREATE_ASSESSMENT_START,
        });  
        const { error , data } = await api.createAssessment(newAssessment, userId);

        if (error) {
            throw new Error(error);
        }
  
        dispatch({
            type: types.CREATE_ASSESSMENT_SUCCESS,
            payload: data,
          });
    } catch (error) {
        dispatch({
            type: types.CREATE_ASSESSMENT_FAIL,
            payload: error,
          });
       console.log(error);
    }
  };



export default getAssessmentsAction
