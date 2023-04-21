import React from 'react';
import Layout from './components/Layout';
import AddTabs from './components/AddTabs';
import NotFound from './components/Pages/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './index.css'
import Sign from './components/Pages/Sign';
import Main from './components/Pages/Main';
import Chords from './components/Pages/Chords';
import Modal from './components/Modal';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Main/>
            </Route>
            <Route exact path='/sign'>
            <Sign/>
            </Route>
            <Route exact path='/addTabs'>
            <AddTabs/>
            </Route>
            <Route exact path='/chords'>
            <Chords/>
            </Route>
            <Route exact path='/modal'>
              <Modal/>
            {/* <Modal value={<Sign/>}/> */}
            </Route>
            <Route >
              <NotFound/>
            </Route>
        </Switch>
      </Layout>
    </Router>
   
    
  );
}

export default App;
