import Conteiner from '../components/Layout/Conteiner';
import AssessmentUnit from '../components/Dashboard/Assessment/AssessmentUnit';
import PageHeader from '../components/Layout/PageHeader';



export default function Dashboard() {
 
  return (
    <Conteiner layout='dashboard'>
      <PageHeader tag='h2' text='Dashboard'></PageHeader>
      
      <AssessmentUnit/>
    </Conteiner>
  )
}
