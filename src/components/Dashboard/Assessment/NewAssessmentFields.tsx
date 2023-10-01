import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function NewAssessmentFields({titleRef, descriptionRef}:any) {
    const fieldTitle = 'Название теста';
    const fieldDescription = 'Описание теста';
    
    useEffect(() => {
        titleRef.current?.focus();
    },[titleRef]);
  return (
    <div>
        <Form.Control 
            className='mb-3 me-3' 
            // data-id={index} id={data.id} 
            type="text" 
            placeholder={fieldTitle} 
            onChange={(e) => (e)} 
            ref={titleRef}
        />
        <Form.Control 
            // onChange={(e) => (e)} 
            as="textarea" 
            rows={3} 
            placeholder={fieldDescription}
            ref={descriptionRef} 
        />
    </div>
  )
}

export default NewAssessmentFields
