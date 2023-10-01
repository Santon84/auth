import React, {useEffect, useState} from 'react'
import Question from './questions/Question'
import { useParams } from 'react-router';
import { getQuestionListByAssessmentId } from '../../redux/api/getData';
import { QuestionData } from '../../types/types';
import { useAuth } from 'context/AuthContext';

function QuestionList({assessmentId = ''}) {
    const {currentUser} = useAuth();
    const [assesment, setAssessment] = useState<QuestionData[]>()
    // const [showEdit, setShowEdit] = React.useState(false);
    let { id }  = useParams();


    useEffect(() => {
        if(id) {
            getQuestionListByAssessmentId(id,currentUser.uid ).then(res => setAssessment(res));
        }
    },[id])


  return (
    <>
        {   
            assesment?.sort((a,b) => a.order - b.order).map(question => {
                return <Question 
                        key={question.id} 
                        question={question.question} 
                        qId={question.id}
                        assessmentId={id || ''}
                        />
            })
        }
    </>
  )
}

export default QuestionList
