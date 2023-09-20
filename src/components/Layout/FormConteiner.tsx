import React from 'react'

type FormContainerProps = {
children: React.ReactNode
}

function FormConteiner({children}:FormContainerProps ) {
  return (
    <div className="w-100" style={{maxWidth: '400px'}}>
    {children}    
    </div>
  )
}

export default FormConteiner
