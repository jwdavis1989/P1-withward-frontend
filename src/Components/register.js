import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class Register extends React.Component {

    constructor(props) {
        super(props);
        //If They are not logged in:
        if (!sessionStorage.getItem("user"))
        {
            //Create a new user object to fill
            console.log("User not logged in.")
            this.state = {username:"", password:"", email:"", photo:"", errorMessage: null};
        }
        else
        {
            //Redirect to their Profile page
            this.state = JSON.parse(sessionStorage.getItem("user"));
            this.props.history.push("/");
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    render() {
      return (
          <div id="generic-menu">
              <form onSubmit={this.handleSubmit}>
                <label>
                    <h1>Register Account</h1>
                    Username:
                    <br/><input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    <br/>Password:
                    <br/><input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <br/>Email:
                    <br/><input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    <br/>Photo URL:
                    <br/><input type="text" name="photo" value={this.state.photo} onChange={this.handleInputChange} />
                    <br/><input type="submit" value="Submit" />
                    <br/><div className="error-mesage">{this.state.errorMessage}</div>
                
                </label>
              </form>
          </div>
          );
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        var urlString = "http://localhost:8080/withward/users"
        axios.post(urlString, {username: this.state.username, password: this.state.password, email: this.state.email, photo: this.state.photo})
        .then (resp => {
            //Route to User Landing Page
            alert("Successful Registration");
            sessionStorage.setItem("user", JSON.stringify({user: {username: this.state.username, password: this.state.password}}));
            // / = Profile Page
            this.props.history.push("/");
        })
        .catch (resp => {
            //Registration Failed
            this.setState({errorMessage: "Registration Failed"})
        });
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  }


  export default withRouter(Register);