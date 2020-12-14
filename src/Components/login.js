import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import logo from "../Resources/Images/withward_icon_rainbow.png";

class Login extends React.Component {

    constructor(props) {
        super(props);
        //If They are not logged in:
        if (!sessionStorage.getItem("user"))
        {
            //Create a new user object to fill
            console.log("User not logged in.")
            this.state = {username:"", password:"", isAdmin:false, errorMessage: null};
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
          <div id="generic-menu">
              <form onSubmit={this.handleSubmit}>
                <label>
                    <h1><img id='withward-logo' src={logo} alt="Withward Logo"></img>Login</h1>
                    Username:
                    <br/><input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    <br/>Password:
                    <br/><input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <br/>Admin: <input type="checkbox" name="adminCheck" onChange={this.handleCheck} />
                    <br/><input type="submit" className="btn" value="Submit" />
                    <br/><br/>New User?
                    <br/><button className="btn" onClick={() =>{this.props.history.push("/register")}}>Register New Account</button>
                    <br/><div className="error-mesage">{this.state.errorMessage}</div>
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
        axios.post(urlString, {username: this.state.username, password: this.state.password}, {withCredentials: true})
        .then (resp => 
        {
            //Route to User Landing Page
            console.log("Successful Login");
            console.log(resp);
            sessionStorage.setItem("user", JSON.stringify({user: {username: this.state.username, password: this.state.password, isAdmin: resp.data.includes("ADMIN")}}));
            // / = Profile Page
            this.props.history.push("/");
        })
        .catch (resp =>
        {
            //Login Failed
            console.log("Incorrect Username or Password");
            this.setState({errorMessage: "Incorrect Username or Password"})
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