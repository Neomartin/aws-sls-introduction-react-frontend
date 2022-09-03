import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Counter } from '../../components/Counter/Counter';
import { Welcome } from '../../components/Welcome/Welcome'
            //       {        props           }
export const Main = ({ users, title, subtitle }) => {
    const URL = `https://j0w24jl69b.execute-api.us-east-1.amazonaws.com/dev/api`;
    useEffect(()=> {
      callTest()
    }, [])
  
    async function callTest() {
      const response = await axios.get(`https://j0w24jl69b.execute-api.us-east-1.amazonaws.com/dev/api/test`);
      console.log(response)
    }

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
