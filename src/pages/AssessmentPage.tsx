
import Conteiner from '../components/Layout/Conteiner'
import QuestionList from '../components/Assessment/QuestionList'
import NewQuestion from '../components/Assessment/NewQuestion';
import PageHeader from '../components/Layout/PageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { setCurrentAssessmentAction } from 'redux/actions/assessmentActions';
import { AssessmentData } from 'types/types';
import { IAssessmentState } from 'redux/reducers/assessment';
function AssessmentPage() {
    const { id = ''}  = useParams();
    const dispatch:any = useDispatch();
    const assessment:IAssessmentState = useSelector((state:RootState) => state.assessment);
  
    useEffect(() => {
        if  (id) {
            dispatch(setCurrentAssessmentAction(id));
        }
    },[id, dispatch]);

    return (
        <Conteiner layout='dashboard'>
            <PageHeader tag='h2' text={assessment?.current?.name || ''}></PageHeader>
            <QuestionList assessmentId={id}/>
            <NewQuestion assessmentId={id}/>
        </Conteiner>
  )
}

export default AssessmentPage
