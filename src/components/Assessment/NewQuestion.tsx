import React from 'react'
import { Button } from 'react-bootstrap'
import EditQuestionModal from './questions/EditQuestionModal';


function NewQuestion() {
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
    {showEdit  ? <EditQuestionModal title='Новый вопрос' show={showEdit} handleClose={handleCloseModal} answers={undefined} question={null}/> : null} 
    </>
  )
}

export default NewQuestion
