import React , { useEffect } from 'react'
import { AssessmentData } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import getAssessmentsActions from '../../redux/actions/assessmentActions';
import { RootState } from '../../redux/store';
import Spinner from '../../components/Layout/Spinner';
import Assessment from './Assessment';

function AssessmentList() {
    const dispatch:any = useDispatch();
  const {items = [], loading} = useSelector((state:RootState) => state.assessment);
  
  useEffect(() => {
    dispatch(getAssessmentsActions());
  },[dispatch]);

  
  if (loading) return <Spinner />;
  return (
    <>
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
