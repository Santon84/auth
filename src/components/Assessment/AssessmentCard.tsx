import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { type AssessmentProps } from '../../types/types'

function handleClick() {


} 

function AssessmentCard({url,title,description}: AssessmentProps) {
  return (
    // <div className='m-4 container-fluid'>
      <Card onClick={handleClick} className='p-4 mt-4'>
        <h2><Link to={url}>{title}</Link></h2>
        <p>{description}</p>
      </Card>
    // </div>
  )
}

export default AssessmentCard
