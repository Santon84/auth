import React from 'react'
import Conteiner from '../components/Layout/Conteiner'
import QuestionList from '../components/Assessment/QuestionList'
import NewQuestion from '../components/Assessment/NewQuestion';
import PageHeader from '../components/Layout/PageHeader';


function AssessmentPage() {
    return (
        
        <Conteiner layout='dashboard'>
            <PageHeader tag='h2' text='Assessment Page'></PageHeader>
            <QuestionList/>
            <NewQuestion/>
        </Conteiner>
        
  )
}

export default AssessmentPage
