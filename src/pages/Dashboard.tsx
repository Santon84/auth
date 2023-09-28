import Conteiner from '../components/Layout/Conteiner';
import { Button } from 'react-bootstrap';
import AssessmentList from '../components/Dashboard/AssessmentList';
import PageHeader from '../components/Layout/PageHeader';


export default function Dashboard() {
  
  return (
    <Conteiner layout='dashboard'>
      <PageHeader tag='h2' text='Dashboard'></PageHeader>
      <Button>Создать новый тест</Button>
      <AssessmentList/>
    </Conteiner>
  )
}
