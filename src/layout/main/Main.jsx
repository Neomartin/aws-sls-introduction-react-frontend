import React from 'react'
import { Welcome } from '../../components/Welcome/Welcome'

export const Main = (props) => {

  
    return (
    <>
     <Welcome />
      <div className="custom-div">
        <h2>{props.titleToMain}</h2>
        <p>{props.subtitleTo}</p>
      </div>

      <Welcome />
    </>
  )
}
