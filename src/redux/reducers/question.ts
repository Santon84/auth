
import { PayloadAction} from '@reduxjs/toolkit'
import * as types from "../types/questionTypes";
import { QuestionData } from '../../types/types';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';





export interface IQuestionState {
    items: QuestionData[],
    current: QuestionData | null,
    loading: boolean,
    error: string

}
const initialState: IQuestionState = {
    items: [],
    current: null,
    loading: true,
    error: ''

}

const questionReducer = (state = initialState, action:PayloadAction<QuestionData>) => {
    const { type, payload } = action;
  
    switch (type) {
        case types.UPDATE_QUESTION_START:
        case types.CREATE_QUESTION_START:
        case types.DELETE_QUESTION_START:
        case types.GET_QUESTIONS_START:
            return {
                ...state,
                loading : true,
            };
        case types.GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                items : payload,
                loading : false,
            }
        case types.DELETE_QUESTION_SUCCESS:
            return {
                ...state,
                items : state.items.filter(item => item.id !== payload.id),
                loading : false,
            }
        case types.CREATE_QUESTION_SUCCESS:
            return {
                ...state,
                items : [...state.items, payload],
                loading : false,
            }
        case types.UPDATE_QUESTION_SUCCESS:
        return {
            ...state,
            items : state.items.map(item => item.id === payload.id ? {...item, question : payload.question} : item),
            loading : false,
        }
        default:
            return state;
    }
}

  export default questionReducer
  