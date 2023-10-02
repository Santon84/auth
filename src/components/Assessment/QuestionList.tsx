import {useEffect} from 'react'
import Question from './questions/Question'
import { QuestionData } from '../../types/types';
import { useAuth } from 'context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionListAction } from 'redux/actions/questionActions';
import { RootState } from 'redux/store';
import Spinner from 'components/Layout/Spinner';



function QuestionList( {assessmentId = ''}) {
    const {currentUser} = useAuth();
    const {uid} = currentUser;
    const {items = [], loading} = useSelector((state:RootState) => state.question);
    const dispatch:any = useDispatch();
    useEffect(() => {
      dispatch(getQuestionListAction(assessmentId, uid));
    },[dispatch, assessmentId, uid]);
  


    if (!assessmentId) return null;
    if (loading) return <Spinner />;

  return (
    <>
        {  
            items?.map((question:QuestionData) => {
                return <Question 
                        key={question.id} 
                        question={question.question} 
                        qId={question.id}
                        assessmentId={assessmentId}
                        userId = {uid}
                        />
            })
        }
    </>
  )
}

export default QuestionList
