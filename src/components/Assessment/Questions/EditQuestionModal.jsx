import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addAnswer, addQuestion } from '../../Services/setData';

function EditQuestionModal({show, handleClose, data }) {
    const [items, setItems] = React.useState([]);
    const [question, setQuestion] = React.useState([]);
    console.log(data.question);

    function handleAddClick() {
        console.log(items);
        setItems(prev => [...prev, {answer: '', correct: false, id: ''}]);
    }


    function handleSaveClick() {

        //saving question 
        try {
            addQuestion(question);
        }
        catch (e) {
            console.log(e.message);
        }
        
        //Saving answers
        items.forEach(item => {
            try {
                addAnswer(item, data.id);
            } catch (e) {
                console.log(e.message);
            } finally {
                handleClose();
            }
        })
    }


    function handleQuestionChange(e) {
        setQuestion(prev => ({...prev, question: e.target.value}));
    }


    function handleChange(e) {
        setItems([...items].map(item => {
            if (item.id === e.target.id) {
                return {
                    ...item,
                    answer: e.target.value
                }
            } else return item
        })) 
    }

    React.useEffect(() => {
        setItems(data);
        setQuestion({question: data.question, id:data.id})
        return () => {
            setItems([]);
            setQuestion({});
        }
    },[]);

    
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
                 <Form.Control className='mb-3' key={index} id={data.id} type="text" placeholder="answer" onChange={(e) => handleChange(e)} defaultValue={data.answer} />
                 )
            })}
        </Form>
        <Button onClick={handleAddClick} variant="outline-primary">+</Button>{' '}
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
