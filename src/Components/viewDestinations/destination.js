import React from 'react';

const User = ({ user }) => {
console.log(user);
   return (
      <tr>
         <td>{user.id}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>
         <td>{user.is_admin}</td>
         <td>{user.photo}</td>
      </tr>
   )
}

export default User;