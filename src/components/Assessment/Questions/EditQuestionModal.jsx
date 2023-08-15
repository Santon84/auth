import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditQuestionModal({show, handleClose, data }) {
    console.log(data.question);
  return (

    <Modal key={data.id} show={show} onHide={handleClose}>
        {/* <div className='m-4'> */}
        <Modal.Header closeButton>
          <Modal.Title>Редактирование ответов</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            
        <Form.Control key={data.question} className="fw-bold" as="textarea" rows={3} placeholder="Normal text" defaultValue={data.question} />
                <br/>
        <Form>
            {data.map((data,index) => {
                return (
                 <Form.Control className='mb-3' key={index} data-id={index} type="text" placeholder="answer" defaultValue={data.answer} />
                 )
            })}
        </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default EditQuestionModal
