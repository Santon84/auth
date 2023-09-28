import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export type AssessmentProps = {
  title: string,
  description: string,
  url: string,
}


function handleClick() {


} 

function Assessment(props: AssessmentProps) {
  const { title, description, url} = props;
    return (
      <Card onClick={handleClick} className='p-4 '>
        <h2><Link to={url}>{title}</Link></h2>
        <p>{description}</p>
      </Card>
  
  )
}

export default Assessment
