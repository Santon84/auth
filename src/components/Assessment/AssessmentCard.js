import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function handleClick() {


} 

function AssessmentCard({link,title,description}) {
  return (
    <div className='m-4 container-fluid'>
      <Card onClick={handleClick} className='p-4'>
        <h2><Link to={link}>{title}</Link></h2>
        <p>{description}</p>
      </Card>
    </div>
  )
}

export default AssessmentCard
