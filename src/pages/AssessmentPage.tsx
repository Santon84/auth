import React, { useEffect, useState } from 'react'
import { getQuestionListByAssessmentId } from '../redux/api/getData'
import { useParams } from 'react-router'
import Conteiner from '../components/Layout/Conteiner'
import { Button } from 'react-bootstrap'
import EditQuestionModal from '../components/Assessment/questions/EditQuestionModal'
import Question from '../components/Assessment/questions/Question'
import { QuestionData } from '../types/types'

function AssessmentPage() {
    const [assesment, setAssessment] = useState<QuestionData[]>()
    const [showEdit, setShowEdit] = React.useState(false);
    const [answersData,  setAnswersData] = React.useState([]);
    let { id }  = useParams();


    function handleNewQuestion() {
        setShowEdit(true);
    }


    const handleCloseModal = () => {
        setShowEdit(false);
        setAnswersData([]);
    }

    useEffect(() => {
        if(!id) return;
        getQuestionListByAssessmentId(id).then(res => setAssessment(res));
    },[id])

    useEffect(() => {
        if(!showEdit && id) {
        getQuestionListByAssessmentId(id).then(res => setAssessment(res));
        }
    },[id, showEdit])

    
    
    return (
        
        <Conteiner layout='dashboard'>
            <div>Assessment Page</div>
            <div className='m-4 container-fluid'>
                {   

                    assesment?.sort((a,b) => a.order - b.order).map(question => {
                        
                        return <Question key={question.id} question={question.question} qId={question.id}/>
                    })
                }
                <Button onClick={handleNewQuestion} className='mt-4' variant="outline-primary">+</Button>{' '}
            </div>
            {showEdit  ? <EditQuestionModal title='Новый вопрос' show={showEdit} handleClose={handleCloseModal} answers={undefined} question={null}/> : null} 
    
        </Conteiner>
        
  )
}

export default AssessmentPage
