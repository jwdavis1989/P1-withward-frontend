import React from 'react';
import User from './User'
const UserTable = ({users, refreshUsers})=>{
    return (
        <section id="user-list-main">
        <h1>User List</h1>
        <button onClick={refreshUsers}>Refresh</button>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>Role ID</th>
                    <th>Role Name</th>
                </tr>
            </thead>
            <tbody id="user-table-data">
                {
                    users.map(user=> 
                        (<User user={user} key={user.id}/>)
                    )
                }
            </tbody>
        </table>
        </section>
    );
}

export default UserTable;