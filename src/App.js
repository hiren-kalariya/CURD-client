import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import AddInfo from './components/AddInfo'
import ShowInfo from './components/ShowInfo';
import EditInfo from './components/EditInfo';
function App() {
  return (
    <>
    <main>
    <NavBar />
            <Switch>
            <Route path="/" component={ShowInfo} exact />
            <Route path="/:id" component={EditInfo} exact />
            <Route path="/user/addinfo" component={AddInfo} exact />
            </Switch>
        </main>
   
   </>
  );
}

export default App;
