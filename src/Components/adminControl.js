import React from 'react';
import { withRouter } from "react-router-dom";

class AdminControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(sessionStorage.getItem("user"));
      }
    render() {
      return (
          <div id="profile">
              Username: {this.state.user.username}
              <br/>
                Password: ******
                <br/><button id="changePassword">Update Password</button>
          </div>
          );
    }
    
    
  }
  
  export default withRouter(AdminControl);