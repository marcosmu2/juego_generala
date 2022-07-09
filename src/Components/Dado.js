import React from 'react'

export const Dado = ({valor, isSeleted, onSetIsSelected}) => {

  return (
    <div className="card text-center w-25 mt-2" onClick={() => {onSetIsSelected() }}>
        <div className="card-body" style={{ backgroundColor :  isSeleted ? '#6b5b95' : 'white' , color : isSeleted ? 'white' : 'black'  }}>
            <h1>{valor}</h1>
        </div>
    </div>
  )
}
