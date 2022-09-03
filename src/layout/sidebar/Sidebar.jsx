import { Avatar, List } from 'antd'
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { navLinksConst } from "../../constants/navLinks"
import { useAuth } from '../../services/Auth/AuthContext'

export const Sidebar = () => {

    const auth = useAuth();
    const currentUser = auth.getAuthenticatedUser();
    console.log(`sidebar current user`, currentUser);
    const logout = (auth.logout);

    return (
        <>
            <List itemLayout="horizontal" dataSource={navLinksConst}
                renderItem={item => (
                    item.protected && !currentUser ? '' : 
                    <NavLink to={item.path ?? '/'}
                        className={({ isActive }) => isActive ? `navlink-active` : undefined
                        }>
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={item.title}
                                onClick = {item.action === 'action' ? logout : undefined}
                            // description="Página principal"
                        />
                        </List.Item>

                    </NavLink>
                )}
            >
            </List>
            
        </>
    )
}
