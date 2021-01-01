import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import SignIn from "./components/Login";
import SignUp from "./components/Register";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div >
     <Router>
       <Switch>
         <Route exact path="/" component={SignIn}/>
         <Route path="/register" component={SignUp}/>
         <Route path="/dashboard" component={Dashboard}/>
       </Switch>
     </Router>
    </div> 
  );            
}

export default App;
