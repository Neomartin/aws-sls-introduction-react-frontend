import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

export const User = () => {
  const {id, at} = useParams();
  const [user, setUser] = useState({});
  const dateOptions = { day: 'numeric', month: `2-digit`, year: 'numeric' };
  useEffect(() => {
    getUserData();
  }, [])
  
  async function getUserData() {

    const user = await axios.get(`https://j0w24jl69b.execute-api.us-east-1.amazonaws.com/dev/api/${id}/${at}`);
    if(user.data.Item && Object.keys(user.data.Item)) {
        setUser(user.data.Item);
    }
  }

  return (
    <div>User Route Params get
        <h1>{user.fullName}</h1>
        <p>
            EDAD: {user.age}
        </p>
        <p>{ new Date(user.createdAt).toLocaleDateString('es-AR', dateOptions   )}</p>
    </div>
  )
}
