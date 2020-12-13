import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';

// Functional component 
const ViewUsersPage = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        //const response = await Axios.get('http://localhost:3000/users');

        setUsers(response.data);
    }

    const refreshUsers = () =>{
        getUsers();
    }



    // UseEffect is what is known as a hook
    // useEffect takes advantage of the component lifecycle,
    // There's essentially three different scenarios that useEffect will invoke the callback function
    // 1. You pass in the callback with no arguments
    //      -> Call the callback whenever you first mount the component, and whenever the component is re-rendered
    // 2. You pass in the callback with an empty array
    //      -> Call the callback whenever you first mount the component
    // 3. You pass in the callback with an array of dependencies (variables) 
    //      -> Call the callback whenever you first mount the component AND (whenever the component is re-rendered AND the variable value changes)

    // In this example, we only invoke this function the first time the component is mounted.
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <UserTable users={users} refreshUsers={refreshUsers}/>
    );
}

export default ViewUsersPage;