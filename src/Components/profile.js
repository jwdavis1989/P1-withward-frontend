import React from 'react';
import { withRouter } from "react-router-dom";
import logo from "../Resources/Images/withward_icon_rainbow.png";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(sessionStorage.getItem("user"));
      }
    render() {
      return (
          <div id="generic-menu">
            <h1><img id='withward-logo' src={logo} alt="Withward Logo"></img>Profile</h1>
              Username: {this.state.user.username}
              <br/>
                Password: ******
                <br/><button id="changePassword" className="btn" onClick= {()=> {this.props.history.push("/passwordReset");}}>Update Password</button>
          </div>
          );
    }
    
    
  }
  
  export default withRouter(Profile);