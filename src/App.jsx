import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/pages/loginpage/LoginPage';
import Dashboard from './components/pages/dashboard/Dashboard';
import Users from './components/pages/users/Users';
import ContentHeader from './components/contentHeader/ContentHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/users'>
            <Dashboard>
              <Users />
            </Dashboard>
          </Route>
          <Route path='/dashboard'>
            <Dashboard>
              <ContentHeader namaContentHead="raja KOPERASI" namaContent="Dashboard" />
            </Dashboard>
          </Route>
          <Route path='/'>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
