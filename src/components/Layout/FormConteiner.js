import React from 'react'

function FormConteiner({children} ) {
  return (
    <div className="w-100" style={{maxWidth: '400px'}}>
    {children}    
    </div>
  )
}

export default FormConteiner
