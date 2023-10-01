import { useEffect } from 'react'
import { AssessmentData } from 'types/types';
import { useDispatch, useSelector } from 'react-redux';
import getAssessmentsAction from 'redux/actions/assessmentActions';
import { RootState } from 'redux/store';
import Spinner from 'components/Layout/Spinner';
import Assessment from './Assessment';
   



function AssessmentList({currentUser}:any) {
  const {items = [], loading} = useSelector((state:RootState) => state.assessment);
  
  const dispatch:any = useDispatch();

  useEffect(() => {
    dispatch(getAssessmentsAction(currentUser.uid));
  },[dispatch, currentUser.uid]);

  
  if (loading) return <Spinner />;

  return (
    <>

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
