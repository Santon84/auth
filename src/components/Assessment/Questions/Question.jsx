import React from 'react'
import { Card, Button } from 'react-bootstrap'

import { getAnswersList } from '../../Services/getData';
import EditQuestionModal from './EditQuestionModal';
function Question({question, qId}) {
  const [showEdit, setShowEdit] = React.useState(false);
  const [answersData,  setAnswersData] = React.useState([]);
  const handleCloseModal = () => {
    setShowEdit(false);
    setAnswersData([]);
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
    <div key={qId}>    
      
        <Card className='d-flex justify-content-between p-4 mt-4 flex-row container-fluid'>
            <h2>{question}</h2>
            <button data-toggle="modal" onClick={showAnswers} type="button" className="btn btn-light">Edit</button>
        </Card>
    
    
        
    {showEdit  ? <EditQuestionModal key={qId} show={showEdit} handleClose={handleCloseModal} data={answersData} /> : null}
    </div>

  )
}

export default Question
