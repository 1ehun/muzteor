import React, { useState } from 'react';
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
import Articles from './components/Pages/Articles';


// dark theme ---
// export const THEMES = {
//   light: 'light',
//   dark: 'dark'
// }

export const ThemeContext = React.createContext(false)
// dark theme --/



function App() {
  const [theme, setTheme] = useState(false)
  


  return (
    //шо робить хз, как перекинуть функцию изменения состояния темы, глобальная переменная?
    <ThemeContext.Provider value={{theme,setTheme}}>
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
            <Route exact path='/addArticle'>
            <Articles/>
            </Route>
            <Route >
              <NotFound/>
            </Route>
        </Switch>
      </Layout>
    </Router>
    </ThemeContext.Provider>
   
    
  );
}

export default App;
