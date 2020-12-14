import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import logo from "../Resources/Images/withward_icon_rainbow.png";

class Register extends React.Component {

    constructor(props) {
        super(props);
        //If They are not logged in:
        if (!sessionStorage.getItem("user"))
        {
            //Create a new user object to fill
            console.log("User not logged in.")
            this.state = {username:"", password:"", email:"", photo:"", errorMessage: null, newPassword:"", confirmNewPassword:""};
        }
        else
        {
            //Redirect to their Profile page
            this.state = JSON.parse(sessionStorage.getItem("user"));
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    render() {
      return (
          <div id="generic-menu">
              <form onSubmit={this.handleSubmit}>
                <label>
                <h1><img id='withward-logo' src={logo} alt="Withward Logo"></img>Update Password</h1>
                    Old Password:
                    <br/><input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <br/>New Password:
                    <br/><input type="password" name="newPassword" value={this.state.newPassword} onChange={this.handleInputChange} />
                    <br/>Confirm Password:
                    <br/><input type="password" name="confirmNewPassword" value={this.state.confirmNewPassword} onChange={this.handleInputChange} />
                    <br/><input type="submit" value="Submit" className="btn" />
                    <br/><div className="error-mesage">{this.state.errorMessage}</div>
                
                </label>
              </form>
          </div>
          );
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        if (this.state.newPassword === this.state.confirmNewPassword)
        {
            var urlString = "http://localhost:8080/withward/users"

            //Get the User's ID
            axios.get(urlString, {withCredentials: true})
            .then (resp => 
            {
                //Find the User
                let user = resp.data.find(x => x.username == this.state.user.username);
                user.password = this.state.newPassword;
                delete user["isAdmin"];
                //Update User by ID
                console.log(user);
                axios.put(urlString + "/" + user.id, user, {withCredentials: true})
                .then (resp => {
                    //Route to User Landing Page
                    alert("Successful Changed Password");
                    // / = Profile Page
                    this.props.history.push("/");
                })
                .catch (resp => {
                    //Registration Failed
                    this.setState({errorMessage: "Password Update Failed"})
                });
            })
            .catch (resp =>
            {
                //User Lookup Failed
                console.log("Failed to Retrieve User Data from Database");
                console.log(resp);
            });


        }
        else
        {
            this.setState({errorMessage: "New Passwords Do Not Match"})
        }
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  }


  export default withRouter(Register);