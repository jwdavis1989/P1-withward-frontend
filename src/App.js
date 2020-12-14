import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Components/login';
import Register from './Components/register';
import Profile from './Components/profile';
import ViewUsersPage from './Components/viewUsers/viewUsersPage';
import NavBar from './Components/navbar';
import PrivateRoute from './Components/privateRoute';
import PasswordReset from './Components/passwordReset';
import ViewWithlistsPage from './Components/viewWithlists/viewWithlistsPage';

//import { AddPage } from './Components/pages/AddPage';

function App() {
  return (
    <div id="mainDiv">
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path="/login" component={Login}/> 
            <Route exact path="/register" component={Register}/>
            <PrivateRoute exact path="/" component={Profile}/> 
            <PrivateRoute exact path="/admin" component={ViewUsersPage} isAdmin="true"/> 
            <PrivateRoute exact path="/passwordReset" component={PasswordReset}/>
            <Route exact path="/withlists" component={ViewWithlistsPage}/>  
            <Route path="/" render={()=> <div>404 NOT FOUND</div>}/>  
          </Switch>
      </Router>
    </div>
  );
}

export default App;
