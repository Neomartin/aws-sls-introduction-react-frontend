import { List } from 'antd';
import React from 'react'
import { UserItem } from '../UserItem/UserItem';

export const UsersList = ({users, funcionDeBorrar, editUser}) => {
    return (



        <div>

            <List
                itemLayout="horizontal"
                dataSource={users}
                renderItem={usr => <UserItem user={usr} fnDelete={funcionDeBorrar} editUser={editUser} />}
            />



            { /* Ejemplo de como iterar un array y renderizar un componente userItem */}
            {/* {
                users.map(usr => {
                    console.log(usr)
                    return <UserItem user={usr} key={usr._id}/>
                })
            } */}
        </div>
    )
}
