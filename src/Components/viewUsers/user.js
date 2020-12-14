import React from 'react';

const User = ({ user }) => {
console.log(user);
   return (
      <tr id="generic-table">
         <td>{user.id}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>
         <td>{user.isAdmin? "True" : "False"}</td>
         <td>{user.photo}</td>
      </tr>
   )
}

export default User;