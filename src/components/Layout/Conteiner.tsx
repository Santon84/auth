import React from 'react'
import { Container } from "react-bootstrap";

type ContainerProps = {
children: React.ReactNode,
layout: string,
}

function Conteiner({children, layout} :ContainerProps) {
    let classes = ''
    switch(layout) {
        case 'form':
            classes = 'd-flex align-items-center justify-content-center';
            break;
        case 'dashboard':
            classes = 'align-items-start justify-content-start';
            break;
        default: 
            classes = 'd-flex align-items-center';
            break;
    }
  return (
    <>
      <Container className={classes} style={{minHeight:'100vh'}}>
        {children}
        

      </Container>
    </>
  )
}

export default Conteiner
