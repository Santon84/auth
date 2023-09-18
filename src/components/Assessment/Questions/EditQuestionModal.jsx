import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addAnswer, addQuestion, deleteAnswer } from '../../Services/setData';
import CloseButton from 'react-bootstrap/CloseButton';





function EditQuestionModal({show, handleClose, data }) {
    const [items, setItems] = React.useState([]);
    const [itemsToDelete, setItemsToDelete] = React.useState([]);
    const [question, setQuestion] = React.useState([]);
    //console.log(data.question);

    function handleAddClick() {
        console.log(items);
        setItems(prev => [...prev, {answer: '', correct: false, id: ''}]);
    }


    async function handleSaveClick() {

        //saving question if changed
        try {
            if(question.isEdited) {
                if (!question.id) {
                    data.id = await addQuestion(question)
                } else {
                    addQuestion(question).then(console.log('id exists'))
                }
            }
        }
        catch (e) {
            console.log(e.message);
        }
        //delete items if delete list is not empty

        itemsToDelete.forEach(item => {
            try {
                deleteAnswer(data.id, item);
            } catch (error) {
                console.log(error.message)
            }
        });
        if (!data.id) return;
        //Saving answers if necessary
        items.forEach(item => {
            try {
                if (item.isEdited) {
                    addAnswer(item, data.id);
                }
            } catch (e) {
                console.log(e.message);
            } finally {
                // closing window
                handleClose();
            }
        })
        handleClose();
    }

    function handleCorrectChange(e) {
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
    function handleQuestionChange(e) {
        setQuestion(prev => question.isEdited ? ({...prev, question: e.target.value}) : ({...prev, question: e.target.value, isEdited: true}));
    }

    function handleDeleteAnswer(e) {
        if (!e.target.id) {
            setItems(prev => prev.filter((item,index) => index !== Number(e.target.getAttribute('data-id'))));
        } else {
            setItemsToDelete(prev => [...prev, e.target.id]);
            setItems(prev => prev.filter(item => item.id !== e.target.id));
        }
    }
    function handleChange(e) {
        
        setItems(prev => prev.map((item,index) => {
          

            if (item.id === e.target.id) {
                if (index === Number(e.target.getAttribute('data-id'))){
                    return item?.isEdited ? {
                        ...item,
                        answer: e.target.value
                    } : {
                        ...item,
                        answer: e.target.value,
                        isEdited: true
                    }
                } else return item
                
            } else return item
        })) 
    }

    React.useEffect(() => {
        setItems(data);
        setQuestion({question: data.question, id:data.id})
        return () => {
            setItems([]);
            setQuestion([]);
            setItemsToDelete([]);
        }
    },[]);
    React.useEffect(() => {
        console.log('items')
        console.log(items)
    },[items])
    
   return (

    <Modal key={data.id} show={show} onHide={handleClose}>
        {/* <div className='m-4'> */}
        <Modal.Header closeButton>
          <Modal.Title>Редактирование ответов</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            
            <Form.Control onChange={(e) => handleQuestionChange(e)} key={data.question} className="fw-bold" as="textarea" rows={3} placeholder="Normal text" defaultValue={data.question} />
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
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button onClick={handleSaveClick} variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default EditQuestionModal
