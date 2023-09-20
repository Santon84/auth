import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


type ModalProps = {
  title: string,
  children: React.ReactNode,
  show: boolean,
  handleClose: () => void,
  handleSaveClick: () => void,
}


const ModalForm = ({children, title, show, handleClose, handleSaveClick} : ModalProps) => {
  return (
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            {children}
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

export default ModalForm
