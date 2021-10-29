import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './copmonents/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './copmonents/Home/Home';
import Login from './copmonents/Login/Login';
import Register from './copmonents/Register/Register'
import Authcontext from './Context/Authcontext';
import Eventregister from './copmonents/Tourregister/Eventregister';
import Notfound from './copmonents/Notfound/Notfound';
import Yourevents from './copmonents/Yourevents/Yourevents';
import Manageevent from './copmonents/Managevent/Manageevent';
function App() {
  return (
    <div className="">
      <Authcontext>
      <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/login">
                    <Login></Login>
                </Route>
                <Route exact path="/register">
                    <Register></Register>
                </Route>
                <Route exact path="/eventregister/:id">
                    <Eventregister></Eventregister>
                </Route>
                <Route exact path="/yourevents">
                    <Yourevents></Yourevents>
                </Route>
                <Route exact path="/manageevent">
                  <Manageevent></Manageevent>
                </Route>
                <Route exact path="*">
                    <Notfound></Notfound>
                </Route>
            </Switch>
        </Router>
      </Authcontext>
    </div>
  );
}

export default App;
