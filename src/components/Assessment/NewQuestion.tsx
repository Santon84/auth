import React from 'react'
import { Button } from 'react-bootstrap'
import EditQuestionModal from './questions/EditQuestionModal';

type NewQuestionProps = {
  assessmentId: string
}

function NewQuestion({assessmentId}:NewQuestionProps) {
  console.log(assessmentId);
    const [showEdit, setShowEdit] = React.useState(false);
    function handleNewQuestion() {
        setShowEdit(true);
    }


    const handleCloseModal = () => {
        console.log('close handle 1')
        setShowEdit(false);
        // setAnswersData([]);
    }
  return (
    <>
    <Button onClick={handleNewQuestion} className='mt-4' variant="outline-primary">+</Button>{' '}
    {showEdit  ? <EditQuestionModal assessmentId={assessmentId} title='Новый вопрос' show={showEdit} handleClose={handleCloseModal} answers={undefined} question={null}/> : null} 
    </>
  )
}

export default NewQuestion
