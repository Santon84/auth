import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AssessmentProps } from './Assessment';
function handleClick() {


} 

function AssessmentCard(props: AssessmentProps) {
  const {url,title,description} = props;
  return (
      <Card onClick={handleClick} className='p-4 mt-4'>
        <h2><Link to={url}>{title}</Link></h2>
        <p>{description}</p>
      </Card>
  )
}

export default AssessmentCard
