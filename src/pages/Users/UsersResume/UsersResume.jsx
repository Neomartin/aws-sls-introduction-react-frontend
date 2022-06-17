import React from 'react'

export const UsersResume = ({users, total}) => {
  return (
    <div>UsersResume
        Cantidad de usuarios: {total} <br />
        Cantidad por página: {users.length}
    </div>
  )
}
