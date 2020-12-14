import React from 'react';
import User from './user';
import logo from "../../Resources/Images/withward_icon_rainbow.png";

const UserTable = ({users, refreshUsers})=>{
    return (
        <div id="generic-menu">
            <section id="user-list-main">
            <h1><img id='withward-logo' src={logo} alt="Withward Logo"></img>Login</h1>
            <button className="btn" onClick={refreshUsers}>Refresh</button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Photo URL</th>
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
        </div>
    );
}

export default UserTable;