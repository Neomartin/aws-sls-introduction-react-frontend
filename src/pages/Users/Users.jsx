import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UsersList } from './UsersList/UsersList';
import { UsersResume } from './UsersResume/UsersResume';

const URL = `https://rc-newapp.herokuapp.com/api`;

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhkNmZjNDFiMjk1Y2I3MzVjMmQxMzIiLCJmdWxsTmFtZSI6IkRhbmllbCIsImVtYWlsIjoiZGFuaWVsQGdtYWlsLmNvbSIsImFjdGl2ZSI6dHJ1ZSwicm9sZSI6IkNMSUVOVF9ST0xFIiwiYWdlIjo1OSwiX192IjowLCJpYXQiOjE2NTUyNTE3NzB9.CIby2MOXXT_tdjf3EovemeEjF9VF1fz8HZnZcJVW2yc`

export const Users = () => {
    const [users, setUsers] = useState([])
    const [total, setTotal] = useState(0)

    // Se ejecuta una vez se cargo todo el VDOM
    useEffect(function () {
        console.log(`UseEffect`)
        getUsers();
    }, []) // Condición mediante la cual se va a volver a ejecutar el useEffect, si esta vacío se ejecuta una única vez al cargarse el componente

    async function getUsers() {
        const response = await axios.get(`${URL}/users`, {
            headers: {
                'Authorization': token
            }
        })
        setTotal(response.data.total)
        const usersDB = response.data.users;
        setUsers(usersDB)
    }


    return (
        <div>
            <h1>USERS COMPONENT</h1>
            <UsersList users={users} />
            <UsersResume users={users} total={total} />
        </div>
    )
}
