import { Avatar, List } from 'antd'
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { navLinksConst } from "../../constants/navLinks"

export const Sidebar = () => {

    const currentUser = JSON.parse(localStorage.getItem('user'))

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={navLinksConst}
                renderItem={item => (
                    item.protected && !currentUser ? '' : 

                    <NavLink to={item.path ?? '/'}
                        className={({ isActive }) => isActive ? `navlink-active` : undefined
                        }>
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={item.title}
                            // description="Página principal"
                        />
                        </List.Item>

                    </NavLink>
                )}
            />
        </>
    )
}
