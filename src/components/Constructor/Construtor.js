import React, {useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import { Card, Button } from 'react-bootstrap'
import Conteiner from '../Layout/Conteiner'

const Construtor = () => {
    const [list, setList] = useState(['hello', 'hello 2'])
  function handleClick(e) {
    e.preventDefault();
    setList(prev => [...prev, 'helooo'])
  }  
    const conteinerRef = useRef();
  return (
    <div className='ms-2' style={{maxWidth: '400px'}}>
      {list.map((item, i) => {
        return (
        <Card className='w-100'>
            <h2>{i+1} {item}</h2>
        </Card>
        )
      })} 
        
      
      <Button type='button' onClick={handleClick} className='w-100 mt-2'>Add</Button>
                
    </div>
  )
}

export default Construtor
