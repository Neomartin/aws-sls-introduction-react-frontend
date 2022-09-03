import { DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { Button, notification, Table } from 'antd'
const { Column } = Table
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../services/Auth/AuthContext';
import './UsersTable.css';

export const UsersTable = () => {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        getUsers()
    }, []);
    const getUsers = async () => {
        try {
            const resp = await axios.get('https://j0w24jl69b.execute-api.us-east-1.amazonaws.com/dev/api/test', {
                headers: {
                    Authorization: auth.token
                }
            });
            console.log(resp)
            setUsers(resp.data);
            console.log(resp.data)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    const goTo = (id, at) => {
        navigate('/user/' + id + '/' + at);
    }

    const deleteUser = async(id, at) => {
        try {
            await axios.delete('https://j0w24jl69b.execute-api.us-east-1.amazonaws.com/dev/api/' + id + '/' + at);
            openNotification('Usuario Borrado!', 'El usuario se borró correctamente de la DB', 'success');
            getUsers();
        } catch(error) {
            console.log(error);
            openNotification('Error!', 'No se pudo borrar el usuario', 'error');
        }
    }

    const openNotification = (message, description, type) => {
        notification[type]({
          message,
          description,
          placement: "top",
        });
    };
    return (
        <div>
            <Table dataSource={users} loading={loading}
                  rowKey={(user) => user.UserId} >
                <Column title='ID'  dataIndex="UserId" key="UserId" className='users-table-id-column'></Column>
                <Column title='Nombre Completo'  dataIndex="fullName" key="fullName"></Column>
                <Column title='Edad'  dataIndex="age" key="age"></Column>
                <Column title="Acciones" key="action" render={(text, record) => 
                 (
                    <div>
                        <Button type="primary" icon={<UserOutlined />} size='small' onClick={() => goTo(record.UserId, record.createdAt)}/>
                        <Button type="danger" icon={<DeleteOutlined />} size='small' onClick={() => deleteUser(record.UserId, record.createdAt)}/>
                    </div>
                )} />
            </Table>
        </div>
    )
}
