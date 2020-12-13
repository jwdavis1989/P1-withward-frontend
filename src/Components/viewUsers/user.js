import React from 'react';

const User = ({ user }) => {

   return (
      <tr>
         <td>{user.user_id}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>
         <td>{user.is_admin}</td>
      </tr>
   )
}

export default User;