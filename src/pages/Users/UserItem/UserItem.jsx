import React from 'react'
import { List, Tooltip, Button, Space, Row, Col } from 'antd';
import { DeleteOutlined, EditOutlined, StarOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
export const UserItem = ({ user, fnDelete }) => {

    const deleteElement = (id) => {
        // levantar modal
    }
    
    return (

        <List.Item>
            <Row className='w-full'>
                <Col xs={24} lg={18}>
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<a href="https://ant.design">{user.fullName}</a>}
                        description={user.email}
                    />
                </Col>
                <Col xs={24} lg={6}>
                    <Row gutter={5} justify='center' className='user-icons-actions'>
                        <Col  lg={8}>
                            <Tooltip title="Delete user">
                                <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} 
                                 onClick={()=> {fnDelete(user._id)}} />
                            </Tooltip>
                        </Col>
                        
                        <Col  lg={8}>
                            <Tooltip title="search">
                                <Button shape="circle" icon={<EditOutlined />} />
                            </Tooltip>
                        </Col>
                        <Col  lg={8}>
                            <Tooltip title="Set as favorite">
                            <Button className="icon-without-border" shape="circle" icon={<StarOutlined />} />
                            </Tooltip>
                        </Col>


                    </Row>
                </Col>
            </Row>

        </List.Item>
        // <div>
        //     {user._id}
        //     <h4 >{user.fullName}</h4>
        //     <a href={`mailto:${user.email ?? 'noexiste'}`}>{user.email ?? 'noexiste'}</a>
        //     <hr />
        // </div>
    )
}
