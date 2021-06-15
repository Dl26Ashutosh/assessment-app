import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Registration from  './components/registration';
import Userlist from './components/userList';
import Forgotpassword from './components/forgotpassword';
import Changepassword from './components/changePassword';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
                <Route exact path="/">
                <Redirect to="/login" />
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/users" component={Userlist} />
                <Route path="/forgot-password" component={Forgotpassword} />
                <Route path="/change-password" component={Changepassword} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
