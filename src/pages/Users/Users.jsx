import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UsersList } from './UsersList/UsersList';
import { UsersResume } from './UsersResume/UsersResume';
import { notification } from 'antd';
import { UserEdit } from './UserEdit/UserEdit';

const URL = `http://localhost:3400/api`;

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhkNmZlNGUyMDc5ZTM2Y2I2OGQ4YmMiLCJmdWxsTmFtZSI6IldhbHRlciBDYXJyaXpvIiwiZW1haWwiOiJ3YWx0ZXJAZ21haWwuY29tIiwiYWN0aXZlIjpmYWxzZSwicm9sZSI6IkFETUlOX1JPTEUiLCJhZ2UiOjM3LCJfX3YiOjAsImlhdCI6MTY1NTg1NzEyNn0.7xYFzx06bo7D8xTvO_-v7OuSmiHhkO74cpVp3WuBJ40`

export const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [total, setTotal] = useState(0)
    const headers = {
        Authorization: token  //localStorage.getItem(`token`)
    }

    // Se ejecuta una vez se cargo todo el VDOM
    useEffect(function () {
        console.log(`UseEffect`)
        getUsers();
    }, []) // Condición mediante la cual se va a volver a ejecutar el useEffect, si esta vacío se ejecuta una única vez al cargarse el componente

    async function getUsers() {
        const response = await axios.get(`${URL}/users`, { headers })
        setTotal(response.data.total)
        const usersDB = response.data.users;
        setUsers(usersDB)
    }
    
    async function deleteUser(id) {
        try {
            // levantar modal
            console.log(`Función borrar usuario`, id);
            const newUsers = [];

            await axios.delete(`${URL}/users/${id}`, { headers })

            // una vez borrado llamar a la función getUsers para traer todos los usuarios de la DB
            // getUsers()

            users.forEach(user => {
                if(user._id !== id) {
                    newUsers.push(user)
                }
            });

            // const shortNewUsers = users.filter(user => users._id !== id)
            // setUsers(shortNewUsers);

            setUsers(newUsers);
            openNotification('Se borró correctamente el usuario', `Usuario con id: ${id} fue borrado correctamente`, 'bottom', 'success')



        } catch(err) {
            console.warn(`Error al borrar usuario`);
            openNotification('No se pudo borrar usuario', `Hubo un error al intentar borrar el usuario con id ${id}`, 'bottom', 'error')
        }
       

    }

    const openNotification = (title, description, placement, type) => {
        notification[type]({
            message: `${title}`,
            description: description,
            placement,
        });
    };

    const editUser = (id) => {
        console.log(`Editar usuario`, id);
        setUser(users.find(u => u._id === id));

    }

    useEffect(() => {

    }, [user])

    return (
        <div>
            <h1>USERS COMPONENT</h1>
            {/* Esto debería ser un componente aparte */}
            <div className='current-user'>
                <h2>LOGGED USER: { users.length === 0 ? 'No hay usuario cargados' : users[0].fullName }</h2>
                <strong>email:</strong> { users.length === 0 ? 'Unknown' : users[0].email}
            </div>
            {/* Esto debería ser un componente aparte */}
            <UsersList users={users} funcionDeBorrar={deleteUser} editUser={editUser} />
            <UsersResume users={users} total={total} />
            {user ? <UserEdit user={user} /> : null}



        </div>
    )
}
