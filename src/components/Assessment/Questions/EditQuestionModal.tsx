import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addAnswer, deleteAnswer } from '../../../redux/api/setData';
import CloseButton from 'react-bootstrap/CloseButton';
import ModalForm from '../../Modal/ModalForm';
import { AnswerData, QuestionData } from '../../../types/types';
import { useAuth } from 'context/AuthContext';
import { useDispatch } from 'react-redux';
import { createQuestionAction, updateQuestionAction } from 'redux/actions/questionActions';


type EditQuestionModalProps = {

    show: boolean, 
    title: string, 
    handleClose: () => void,
    answers: AnswerData[] | undefined,
    question: QuestionData | undefined,
    assessmentId : string,

}

function EditQuestionModal({
    show, 
    title, 
    handleClose, 
    answers, 
    question,
    assessmentId
     }:EditQuestionModalProps) {
    

    const dispatch:any = useDispatch();
    const {currentUser} = useAuth();
    const [answerList, setAnswerList] = React.useState<AnswerData[]>([]);
    const [itemsToDelete, setItemsToDelete] = React.useState<string[]>([]);
    const [question1, setQuestion] = React.useState<QuestionData>();

    function handleAddClick() {
        setAnswerList(prev => [...prev, {answer: '', correct: false, id: ''}]);
    }

    async function deleteItems() {
        if (!itemsToDelete || !question1?.id) return;

        itemsToDelete.forEach(answerId => {
            try {
                deleteAnswer(question1.id, answerId);
            } catch (error:any) {
                console.log(error);
            }
        });
    }
    async function addAnswers() {
        if (!answerList || !question1?.id) return;

        answerList.forEach(item => {
            try {

                if (item.isEdited) {

                    addAnswer({answer:item, id:question1.id});
                }
            } catch (e:any) {
                console.log(e);
            } 
        })
    }


    async function handleSaveClick() {
       
        //saving question if changed
        try {
            if(question1?.isEdited) {
                if (!question1.id) {
                    console.log('if new')
                    dispatch(createQuestionAction({question: question1 , assessmentId: assessmentId, userId:currentUser.uid}))

                    // if(!a?.id) return;
                    // .then(response => { 
                        
                    //     setQuestion(prev => {
                    //         console.log('setQuestion');
                    //         console.log(({...prev, id: response.id}))
                    //         // TODO resolve this problem
                    //        return ({...prev, id: id}) as QuestionData
                    //     } );
                    
                
                    // await addQuestion()
                    //     console.log('after setQuestion',question1);
                    // });
                    
                } else {
                    dispatch(updateQuestionAction({question: question1 , assessmentId: assessmentId, userId:currentUser.uid}))
                }
            }}

        catch (e:any) {
            console.log(e);
        }
        //delete items if delete list is not empty
        deleteItems();
        
        console.log(question1);
        // if (!question1?.id) return;
        addAnswers();
        console.log('saving answers', answerList);
        //Saving answers if necessary
        
        handleClose();
    }

    function handleCorrectChange(e:React.ChangeEvent<HTMLElement>) {
        // removing all marks
        setAnswerList(prev => prev.map(item => {
            if (item.correct) return {...item, correct: false, isEdited: true}
            else return item;
        }))
        // ading new correct marks
        setAnswerList(prev => prev.map((item,index) => {
            if (item.id === e.target.id) {
                // if item don't have an id
                if (index === Number(e.target.getAttribute('data-id'))){
                    return {
                        ...item,
                        correct: true,
                        isEdited: true
                    }
                } else return item
                
            } else return item
        })) 
        
    }
    function handleQuestionChange(e:React.ChangeEvent<HTMLElement>) {
       
       //if (!question1) return;
       const target = e.target as HTMLTextAreaElement;
       setQuestion(prev => question1?.isEdited ? ({...prev, question: target.value} as QuestionData) : ({...prev, question: target.value, isEdited: true} as QuestionData));
    }

    function handleDeleteAnswer(e:React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLButtonElement;
        if (!target.id) {
            setAnswerList(prev => prev.filter((item,index) => index !== Number(target.getAttribute('data-id'))));
        } else {
        
            setItemsToDelete(prev => [...prev, target.id]  );
            setAnswerList(prev => prev.filter(item => item.id !== target.id));
        }
    }
    function handleChange(e:React.ChangeEvent<HTMLElement>) {
        const target = e.target as HTMLTextAreaElement;
        setAnswerList(prev => prev.map((item,index) => {
          

            if (item.id === target.id) {
                if (index === Number(target.getAttribute('data-id'))){
                    return item?.isEdited ? {
                        ...item,
                        answer: target.value
                    } : {
                        ...item,
                        answer: target.value,
                        isEdited: true
                    }
                } else return item
                
            } else return item
        })) 
    }

    React.useEffect(() => {
            //if no question means new question
            if (!question) return;
            setQuestion(question);
            //no answers maybe at new question or existing
            if (!answers) return;
            setAnswerList(answers);
            
        return () => {
            setAnswerList([]);
            setQuestion(undefined);
            setItemsToDelete([]);
        }
    },[]);

    
   return (
    <ModalForm 
    show={show} 
    title={title} 
    handleClose={handleClose} 
    handleSaveClick={handleSaveClick}>

    <Form.Control 
        onChange={(e) => handleQuestionChange(e)} 
        key={question?.id} 
        className="fw-bold" 
        as="textarea" 
        rows={3} 
        placeholder="Текст вопроса" 
        defaultValue={question?.question} 
    />
    <br/>
    <Form>
        {answerList.map((data,index) => {
        
            return (
                <div key={index} className='d-flex align-items-center justify-content-between '>
                    <Form.Check
                        onChange={(e) => handleCorrectChange(e)}
                        name="group1"
                        type='radio'
                        className='mb-3 me-3'
                        data-id={index}
                        checked={data.correct}
                        id={data.id}
                    />
                    <Form.Control 
                    className='mb-3 me-3' 
                    data-id={index} id={data.id} 
                    type="text" 
                    placeholder="answer" 
                    onChange={(e) => handleChange(e)} 
                    value={data.answer} 
                    />
                    <CloseButton 
                    className='mb-3' 
                    data-id={index} 
                    id={data.id} 
                    onClick={(e) => handleDeleteAnswer(e)}
                    />
                </div>
            )
        })}
    </Form>
    <Button 
        onClick={handleAddClick} 
        variant="outline-primary">+
    </Button>
    </ModalForm>

  )
}

export default EditQuestionModal
