import { useEffect } from 'react'
import { AssessmentData } from 'types/types';
import { useDispatch, useSelector } from 'react-redux';
import getAssessmentsAction from 'redux/actions/assessmentActions';
import { RootState } from 'redux/store';
import Spinner from 'components/Layout/Spinner';
import Assessment from './Assessment';
import { Button } from 'react-bootstrap';
import { createAssessmentActions } from 'redux/actions/assessmentActions';

function AssessmentList() {
    const dispatch:any = useDispatch();
  const {items = [], loading} = useSelector((state:RootState) => state.assessment);
  
  function handleClick() {
    dispatch(createAssessmentActions({
      name: 'new assessment', 
      description: 'New assessment description'
    } as AssessmentData))

  }

  useEffect(() => {
    dispatch(getAssessmentsAction());
  },[dispatch]);

  useEffect(() => {
    console.log(items)
  },[loading]);
  

  
  if (loading) return <Spinner />;
  return (
    <>
    <Button onClick={handleClick}>Создать новый тест</Button>
    <h5 className='mt-4'>Список тестов</h5>
    {
        items?.map((assessment:AssessmentData) => {
        return <Assessment 
                key={assessment.id} 
                title={assessment.name} 
                description={assessment.description} 
                url={'edit\\'+assessment.id}
                />
        })
      }
      </>
  )
}

export default AssessmentList
