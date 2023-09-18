import React, { useEffect, useState } from 'react'
import { getAssessmentById } from '../Services/getData'
import { useParams } from 'react-router'
import Conteiner from '../Layout/Conteiner'
import { Button } from 'react-bootstrap'
import EditQuestionModal from './Questions/EditQuestionModal'
import Question from './Questions/Question'

function EditAssessment() {
    const [assesment, setAssessment] = useState([])
    const [showEdit, setShowEdit] = React.useState(false);
    const [answersData,  setAnswersData] = React.useState([]);
    let { id } = useParams();
    function handleNewQuestion() {
        setShowEdit(true);
    }
    const handleCloseModal = () => {
        setShowEdit(false);
        setAnswersData([]);
    }
    useEffect(() => {
        getAssessmentById(id).then(res => setAssessment(res));
    },[id])
    useEffect(() => {
        if(!showEdit) {
        getAssessmentById(id).then(res => setAssessment(res));
        }
    },[id, showEdit])

    
    
    return (
        
        <Conteiner layout='dashboard'>
            <div className='m-4 container-fluid'>
                {   
                    assesment.sort((a,b) => a.order - b.order).map(question => {
                        
                        return <Question key={question.id} question={question.question} qId={question.id}/>
                    })
                }
                <Button onClick={handleNewQuestion} className='mt-4' variant="outline-primary">+</Button>{' '}
            </div>
            {showEdit  ? <EditQuestionModal show={showEdit} handleClose={handleCloseModal} data={answersData} /> : null}
    
        </Conteiner>
        
  )
}

export default EditAssessment
