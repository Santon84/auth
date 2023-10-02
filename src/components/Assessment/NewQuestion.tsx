import React from 'react'
import { Button } from 'react-bootstrap'
import EditQuestionModal from './questions/EditQuestionModal';

type NewQuestionProps = {
  assessmentId: string
}

function NewQuestion({assessmentId}:NewQuestionProps) {
    const [showEdit, setShowEdit] = React.useState(false);
    
    function handleNewQuestion() {
        setShowEdit(true);
    }


    const handleCloseModal = () => {
        setShowEdit(false);
        // setAnswersData([]);
    }
  return (
    <>
    <Button onClick={handleNewQuestion} className='mt-4' variant="outline-primary">+</Button>{' '}
    {showEdit  ? <EditQuestionModal 
                  assessmentId={assessmentId} 
                  title='Новый вопрос' 
                  show={showEdit} 
                  handleClose={handleCloseModal} 
                  answers={undefined} 
                  question={undefined}
                  /> 
    : null} 
    </>
  )
}

export default NewQuestion
