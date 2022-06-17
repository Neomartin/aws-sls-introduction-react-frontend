import React from 'react'
import { Counter } from '../../components/Counter/Counter';
import { Welcome } from '../../components/Welcome/Welcome'
            //       {        props           }
export const Main = ({ users, title, subtitle }) => {

  
    return (
    <>
     <Welcome />
      <div className="custom-div">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      
      <Counter />
    </>
  )
}
