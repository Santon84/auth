import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addAnswer, addQuestion, deleteAnswer } from '../../Services/setData';
import CloseButton from 'react-bootstrap/CloseButton';
import ModalForm from '../../Modal/ModalForm';
import { AnswerData, QuestionData } from '../../../types/types';


type EditQuestionModalProps = {

    show: boolean, 
    title: string, 
    handleClose: () => void,
    answers: AnswerData[] | undefined,
    question: QuestionData | null

}

function EditQuestionModal({show, title, handleClose, answers, question }:EditQuestionModalProps) {
    const [items, setItems] = React.useState<AnswerData[]>([]);
    const [itemsToDelete, setItemsToDelete] = React.useState<string[]>([]);
    const [question1, setQuestion] = React.useState<QuestionData>();

    function handleAddClick() {
        console.log(items);
        setItems(prev => [...prev, {answer: '', correct: false, id: ''}]);
    }


    async function handleSaveClick() {
        console.log(question1);
        //saving question if changed
        try {
            if(question1?.isEdited) {
                if (!question1.id) {
                    // if(!a?.id) return;
                    await addQuestion(question1)
                } else {
                    addQuestion(question1).then(res => console.log(res))
                }
            }
        }
        catch (e:any) {
            console.log(e);
        }
        //delete items if delete list is not empty

        itemsToDelete.forEach(answerId => {
            try {
                if (!question?.id) return;
                deleteAnswer(question.id, answerId);
            } catch (error:any) {
                console.log(error)
            }
        });
        if (!question?.id) return;
        //Saving answers if necessary
        items.forEach(item => {
            try {
                if (item.isEdited) {
                    addAnswer(item, question.id);
                }
            } catch (e:any) {
                console.log(e);
            } finally {
                // closing window
                handleClose();
            }
        })
        handleClose();
    }

    function handleCorrectChange(e:React.ChangeEvent<HTMLElement>) {
        // removing all marks
        setItems(prev => prev.map(item => {
            if (item.correct) return {...item, correct: false, isEdited: true}
            else return item;
        }))
        // ading new correct marks
        setItems(prev => prev.map((item,index) => {
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
       
       if (!question1) return;
       const target = e.target as HTMLTextAreaElement;
       setQuestion(prev => question1.isEdited ? ({...prev, question: target.value} as QuestionData) : ({...prev, question: target.value, isEdited: true} as QuestionData));
    }

    function handleDeleteAnswer(e:React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLButtonElement;
        if (!target.id) {
            setItems(prev => prev.filter((item,index) => index !== Number(target.getAttribute('data-id'))));
        } else {
        
            setItemsToDelete(prev => [...prev, target.id]  );
            setItems(prev => prev.filter(item => item.id !== target.id));
        }
    }
    function handleChange(e:React.ChangeEvent<HTMLElement>) {
        const target = e.target as HTMLTextAreaElement;
        setItems(prev => prev.map((item,index) => {
          

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
            setItems(answers);
            
        return () => {
            setItems([]);
            setQuestion(undefined);
            setItemsToDelete([]);
        }
    },[]);
    // React.useEffect(() => {
    //     console.log('items')
    //     console.log(items)
    // },[items])
    
   return (
    <ModalForm show={show} title={title} handleClose={handleClose} handleSaveClick={handleSaveClick}>

    <Form.Control onChange={(e) => handleQuestionChange(e)} key={question?.id} className="fw-bold" as="textarea" rows={3} placeholder="Текст вопроса" defaultValue={question?.question} />
                    <br/>
            <Form>
                {items.map((data,index) => {
                
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
                            <Form.Control className='mb-3 me-3' data-id={index} id={data.id} type="text" placeholder="answer" onChange={(e) => handleChange(e)} value={data.answer} />
                            <CloseButton className='mb-3' data-id={index} id={data.id} onClick={(e) => handleDeleteAnswer(e)}/>
                        </div>
                    )
                })}
            </Form>
            <Button onClick={handleAddClick} variant="outline-primary">+</Button>
    </ModalForm>





    // <Modal key={data.id} show={show} onHide={handleClose}>
    //     {/* <div className='m-4'> */}
    //     <Modal.Header closeButton>
    //       <Modal.Title>Редактирование ответов</Modal.Title>
    //     </Modal.Header>
        
    //     <Modal.Body>
            
            
    //     </Modal.Body>
        
    //     <Modal.Footer>
    //       <Button variant="secondary" >
    //         Close
    //       </Button>
    //       <Button onClick={handleSaveClick} variant="primary" >
    //         Save Changes
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
  )
}

export default EditQuestionModal
