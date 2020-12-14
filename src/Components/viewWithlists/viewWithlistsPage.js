import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WithlistTable from './withlistsTable';
import { useHistory } from "react-router-dom";

// Functional component 
const ViewWithlistsPage = () => {
    const [withlists, setWithlists] = useState([]);
    var userLogin = JSON.parse(sessionStorage.getItem("user"));
    console.log(userLogin);
    const getWithlists = async () => {
        
        //Get the User's ID
        var urlString = "http://localhost:8080/withward/users"
        
        axios.get(urlString, {withCredentials: true})
        .then (resp => 
        {
            //Find the User
            let user = resp.data.find(x => x.username == userLogin.user.username);
            //Update User by ID
            console.log(user);
            //Get User's Withlists by their ID
            var getUrlString = "http://localhost:8080/withward/withlists?user-id=" + user.id;
            console.log(getUrlString);
            axios.get(getUrlString, {withCredentials: true})
            .then (resp => 
            {
                setWithlists(resp.data);
            })
            .catch (resp =>
            {
                //Withlist Lookup Failed
                console.log("Failed to Retrieve Withlists from Database");
                console.log(resp);
            })
        }) 
        .catch (resp =>
        {
            //User Lookup Failed
            console.log("Failed to Retrieve User Data from Database");
            console.log(resp);
        });
    }
    

    const refreshWithlists = () =>{
        getWithlists();
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
        getWithlists();
    }, [])

    return (
        <WithlistTable withlists={withlists} refreshWithlists={refreshWithlists}/>
    );
}

export default ViewWithlistsPage;