
import Conteiner from '../components/Layout/Conteiner'
import QuestionList from '../components/Assessment/QuestionList'
import NewQuestion from '../components/Assessment/NewQuestion';
import PageHeader from '../components/Layout/PageHeader';
import { useParams } from 'react-router';

function AssessmentPage() {
    const { id }  = useParams();
    return (
        <Conteiner layout='dashboard'>
            <PageHeader tag='h2' text='Assessment Page'></PageHeader>
            <QuestionList assessmentId={id || ''}/>
            <NewQuestion assessmentId={id || ''}/>
        </Conteiner>
  )
}

export default AssessmentPage
