import { List } from 'antd';
import React from 'react'
import { UserItem } from '../UserItem/UserItem';

export const UsersList = ({users}) => {
    return (



        <div>

            <List
                itemLayout="horizontal"
                dataSource={users}
                renderItem={usr => <UserItem user={usr} />}
            />




            {/* {
                users.map(usr => {
                    console.log(usr)
                    return <UserItem user={usr} key={usr._id}/>
                })
            } */}
        </div>
    )
}
