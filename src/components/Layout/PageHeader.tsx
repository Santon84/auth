import React from 'react'

type PageHeaderProps = {
    text : string,
    tag : 'h1' | 'h2' | 'h3' | 'h4'
}

function PageHeader({text='', tag = 'h1'}) {
  

  switch(tag) {
    case 'h1': 
    return <h1>{text}</h1>
    case 'h2': 
    return <h2>{text}</h2>
    case 'h3': 
    return <h3>{text}</h3>
    default: 
    return <h1>{text}</h1>
  }
    
  
}

export default PageHeader