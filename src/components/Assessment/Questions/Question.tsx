import React from 'react'
import { Card, CloseButton } from 'react-bootstrap'
import './Question.css'
import { getAnswersList } from '../../Services/getData';
import EditQuestionModal from './EditQuestionModal';
import { deleteQuestion } from '../../Services/setData';
import { AnswerData } from '../../../types/types';

type QuestionProps = {
  question: string, 
  qId: string
}

function Question({question, qId}:QuestionProps) {
  
  const [showEdit, setShowEdit] = React.useState(false);
  const [answersData,  setAnswersData] = React.useState<AnswerData[]>([]);
  
  const handleCloseModal = () => {
    setShowEdit(false);
    console.log('Close modal');
    setAnswersData([]);
  }
  function handleDeleteQuestion(e:React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    try {
      deleteQuestion(target.id);
    } catch (e:any) {
      console.log(e.message)
    }
  }
  function showAnswers() {
    getAnswersList(qId).then(res => {
      
      console.log('answer')
      console.log(res);
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
    
    
        
    {showEdit  ? <EditQuestionModal key={qId} title="Редактировать вопрос" show={showEdit} handleClose={handleCloseModal} answers={answersData} question={{question: question, id: qId, order: 0}} /> : null}
    </div>

  )
}

export default Question
