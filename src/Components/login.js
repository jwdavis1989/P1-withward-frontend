import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        //If They are not logged in:
        if (!sessionStorage.getItem("user"))
        {
            //Create a new user object to fill
            console.log("User not logged in.")
            this.state = {username:"", password:"", isAdmin: false };
        }
        else
        {
            //Redirect to their Profile page
            this.state = JSON.parse(sessionStorage.getItem("user"));
            this.props.history.push("/");
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    render() {
      return (
          <div id="login-menu">
              <form onSubmit={this.handleSubmit}>
                <label>
                    <h1>Login</h1>
                    Username:
                    <br/><input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    <br/>Password:
                    <br/><input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <br/><input type="checkbox" name="adminCheck" onChange={this.handleCheck} />
                    <br/><input type="submit" className=".btn" value="Submit" />
                    <br/><br/>New User?
                    <br/><button className=".btn" onClick={() =>{this.props.history.push("/register")}}>Register New Account</button>
                </label>
              </form>
          </div>
          );
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        var urlString = "http://localhost:8080/withward/login";
        if (this.state.isAdmin)
        {
            urlString += "/admin";
        }
        axios.post(urlString, {username: this.state.username, password: this.state.password})
        .then (resp => 
        {
            //Route to User Landing Page
            console.log("Successful Login");
            console.log(resp);
            sessionStorage.setItem("user", JSON.stringify({user: {username: this.state.username, password: this.state.password, isAdmin: false}}));
            // / = Profile Page
            this.props.history.push("/");
        })
        .catch (resp =>
        {
            //Login Failed
            console.log("Incorrect Username or Password");
            console.log(resp);
        });
    }
    handleCheck () {
        this.setState({
            isAdmin: !this.state.isAdmin
        });
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  }


  export default withRouter(Login);