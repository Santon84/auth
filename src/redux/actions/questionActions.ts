import { AssessmentData } from "types/types";
import * as api from "redux/api/questionAPI";
import * as types from "../types/questionTypes";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { DeleteQuestionProps } from "redux/api/questionAPI";
import { createQuestionProps } from "redux/api/questionAPI";
export const getQuestionListAction = (assessmentId:string, userId:string) => async (dispatch: Dispatch<AnyAction>) => {
    
    try {
        dispatch({
            type: types.GET_QUESTIONS_START,
        });  
        const { data, error } = await api.getQuestionListByAssessmentId(assessmentId, userId);

        if (error) {
            throw new Error(error);
        }
  
        dispatch({
            type: types.GET_QUESTIONS_SUCCESS,
            payload: data,
          });
    } catch (error) {
        dispatch({
            type: types.GET_QUESTIONS_FAIL,
            payload: error,
          });
       console.log(error);
    }
  };


  export const deleteQuestionAction = ({assessmentId, userId, questionId}:DeleteQuestionProps) => async (dispatch: Dispatch<AnyAction>) => {
    
    try {
        dispatch({
            type: types.DELETE_QUESTION_START,
        });  
        const { id, error } = await api.deleteQuestionById({assessmentId, userId, questionId});

        if (error) {
            throw new Error(error);
        }
  
        dispatch({
            type: types.DELETE_QUESTION_SUCCESS,
            payload: id,
          });
    } catch (error) {
        dispatch({
            type: types.DELETE_QUESTION_FAIL,
            payload: error,
          });
       console.log(error);
    }
  };

  export const createQuestionAction = ({question, assessmentId, userId}:createQuestionProps) => async (dispatch: Dispatch<AnyAction>) => {
    
    try {
        dispatch({
            type: types.CREATE_QUESTION_START,
        });  
        const { data, error } = await api.createQuestion({assessmentId: assessmentId, userId:userId, question: question});

        if (error) {
            throw new Error(error);
        }
  
        dispatch({
            type: types.CREATE_QUESTION_SUCCESS,
            payload: data,
          });
          return data;
    } catch (error) {
        dispatch({
            type: types.CREATE_QUESTION_FAIL,
            payload: error,
          });
       console.log(error);
    }
    
  };