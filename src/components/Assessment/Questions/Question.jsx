import React from 'react'
import { Card, CloseButton } from 'react-bootstrap'
import './Question.css'
import { getAnswersList } from '../../Services/getData';
import EditQuestionModal from './EditQuestionModal';
import { deleteQuestion } from '../../Services/setData';


function Question({question, qId}) {
  const [showEdit, setShowEdit] = React.useState(false);
  const [answersData,  setAnswersData] = React.useState([]);
  const handleCloseModal = () => {
    setShowEdit(false);
    console.log('Close modal');
    setAnswersData([]);
  }
  function handleDeleteQuestion(e) {
    try {

      deleteQuestion(e.target.id);
    } catch (e) {
      console.log(e.message)
    }
  }
  function showAnswers() {
    getAnswersList(qId).then(res => {
      res.question = question;
      res.id = qId;
      setAnswersData(res);
      
      setShowEdit(true);
    })
    // console.log('id ='+qId);
  }
  return (
    <div key={qId} className='question d-flex align-items-center justify-content-between'>    
      
        <Card className='question__card d-flex justify-content-between p-4 my-2 flex-row container-fluid'>
            <h2>{question}</h2>
            <button data-toggle="modal" onClick={showAnswers} type="button" className="btn btn-light">Edit</button>
        
        </Card>
        <CloseButton className='question__delete ms-3' id={qId} onClick={(e) => handleDeleteQuestion(e)}/>
    
    
        
    {showEdit  ? <EditQuestionModal key={qId} title="Редактировать вопрос" show={showEdit} handleClose={handleCloseModal} data={answersData} /> : null}
    </div>

  )
}

export default Question
