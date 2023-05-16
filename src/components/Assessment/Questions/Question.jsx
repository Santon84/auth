import React from 'react'
import { Card } from 'react-bootstrap'
function Question({question}) {
  return (
    <div className='m-4 container-fluid'>
        <Card className='d-flex justify-content-between p-4 flex-row container-fluid'>
            <h2>{question}</h2>
            <button type="button" class="btn btn-light">Edit</button>
        </Card>
    </div>
   
  )
}

export default Question
