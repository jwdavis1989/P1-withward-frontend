import React from 'react';
import { withRouter } from "react-router-dom";

class Register extends React.Component {

    constructor(props) {
        super(props);
        //If They are not logged in:
        if (!sessionStorage.getItem("user"))
        {
            //Create a new user object to fill
            console.log("User not logged in.")
            this.state = {username:"", password:"", isAdmin: false, errorMessage: null};
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
          <div id="register-account-menu">
              <form onSubmit={this.handleSubmit}>
                <label>
                    <h1>Register Account</h1>
                    Username:
                    <br/><input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    <br/>Password:
                    <br/><input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <br/><input type="submit" value="Submit" />
                    <br/>
                    {this.state.errorMessage}
                
                </label>
              </form>
          </div>
          );
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        if (1 === 2)
        {
            //Route to User Landing Page
            alert("Successful Registration");
            sessionStorage.setItem("user", JSON.stringify({user: {username: this.state.username, password: this.state.password, isAdmin: false}}));
            // / = Profile Page
            this.props.history.push("/");
        }
        //Fail Case
        else
        {
            //Login Failed
            this.setState({errorMessage: "Incorrect Username or Password"})
        }
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  }


  export default withRouter(Register);