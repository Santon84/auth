import Conteiner from '../components/Layout/Conteiner';
import { Button } from 'react-bootstrap';
import AssessmentList from '../components/Dashboard/Assessment/AssessmentList';
import PageHeader from '../components/Layout/PageHeader';
import { createAssessment } from 'redux/api/assessmentAPI';
import { AssessmentData } from 'types/types';


export default function Dashboard() {
 
  return (
    <Conteiner layout='dashboard'>
      <PageHeader tag='h2' text='Dashboard'></PageHeader>
      
      <AssessmentList/>
    </Conteiner>
  )
}
