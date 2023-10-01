import React from 'react'
import { Card, CloseButton } from 'react-bootstrap'
import './Question.css'
import { getAnswersList } from '../../../redux/api/getData';
import EditQuestionModal from './EditQuestionModal';
import { deleteQuestion } from '../../../redux/api/setData';
import { AnswerData } from '../../../types/types';

type QuestionProps = {
  question: string, 
  qId: string,
  assessmentId: string,
}

function Question({question, qId, assessmentId}:QuestionProps) {
  
  const [showEdit, setShowEdit] = React.useState(false);
  const [answersData,  setAnswersData] = React.useState<AnswerData[]>([]);


  function handleCloseModal () {
    setShowEdit(false);
    setAnswersData([]);
  }

  function handleDeleteQuestion(e:React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    try {
      deleteQuestion({questionId : target.id, userId : 'a', assessmentId : 'dfd'});
    } catch (e:any) {
      console.log(e.message)
    }
  }


  function editAnswers() {
      getAnswersList(qId).then(res => {
      setAnswersData(res);
      setShowEdit(true);
    })
  }
  return (
    <div key={qId} className='question d-flex align-items-center justify-content-between'>    
      
        <Card className='question__card d-flex justify-content-between align-items-center p-3 my-2 flex-row container-fluid'>
            <h6>{question}</h6>
            <button data-toggle="modal" onClick={editAnswers} type="button" className="btn btn-light">Edit</button>
        </Card>
        <CloseButton className='question__delete ms-3' id={qId} onClick={(e) => handleDeleteQuestion(e)}/>
    {showEdit  ? <EditQuestionModal assessmentId={assessmentId} key={qId} title="Редактировать вопрос" show={showEdit} handleClose={handleCloseModal} answers={answersData} question={{question: question, id: qId, order: 0}} /> : null}
    </div>

  )
}

export default Question
