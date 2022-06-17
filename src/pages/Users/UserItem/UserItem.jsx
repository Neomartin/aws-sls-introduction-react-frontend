import React from 'react'
import { List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
export const UserItem = ({ user }) => {
    return (

        <List.Item>
            <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{user.fullName}</a>}
                description={user.email}
            />
        </List.Item>
        // <div>
        //     {user._id}
        //     <h4 >{user.fullName}</h4>
        //     <a href={`mailto:${user.email ?? 'noexiste'}`}>{user.email ?? 'noexiste'}</a>
        //     <hr />
        // </div>
    )
}
