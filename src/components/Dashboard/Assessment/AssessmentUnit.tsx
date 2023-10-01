import React, { useRef } from 'react'
import AssessmentList from './AssessmentList'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createAssessmentActions } from 'redux/actions/assessmentActions'
import { AssessmentData } from 'types/types'
import ModalForm from 'components/Modal/ModalForm'
import NewAssessmentFields from './NewAssessmentFields'
import { useAuth } from 'context/AuthContext';


function AssessmentUnit() {
    const { currentUser } = useAuth();  
    const titleRef = useRef<HTMLInputElement>();
    const descriptionRef = useRef<HTMLInputElement>();
    const dispatch:any = useDispatch();
    const [showModal, setShowModal] = React.useState(false);

    function handleCreateClick() {
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
        titleRef.current = undefined;
        descriptionRef.current = undefined;
    }

    function handleSaveClick() {
        if (!titleRef.current?.value) return;

        dispatch(createAssessmentActions({
            name: titleRef.current?.value, 
            description: descriptionRef?.current?.value
        } as AssessmentData, currentUser.uid))

        setShowModal(false);
    }

  return (
    <>
    <Button onClick={handleCreateClick}>Создать новый тест</Button>
    <h5 className='mt-4'>Список тестов</h5>
    <AssessmentList currentUser={currentUser}/>
    <ModalForm show={showModal} 
    title={'Создание теста'} 
    handleClose={handleClose} 
    handleSaveClick={handleSaveClick}>
        <NewAssessmentFields titleRef={titleRef} descriptionRef={descriptionRef}/>
    </ModalForm>
    </>
  )
}

export default AssessmentUnit
