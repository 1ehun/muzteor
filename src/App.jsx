import React, { useState } from 'react';
import Layout from './components/Layout';
import AddTabs from './components/AddTabs';
import NotFound from './pages/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './index.css'
import Main from './pages/Main';
import Chords from './pages/Chords';
import Articles from './pages/Articles';
import Artists from './pages/Artists';
import AddArticles from './pages/AddArticles';
import Songs from './pages/Songs';


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
  
    <ThemeContext.Provider value={{theme,setTheme}}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Main/>
            </Route>
            <Route exact path='/addTabs'>
            <AddTabs/>
            </Route>
            <Route exact path='/chords'>
            <Chords/>
            </Route>
            <Route exact path='/addArticle'>
            <AddArticles/>
            </Route>
            <Route exact path='/artists'>
            <Artists/>
            </Route>
            <Route exact path='/articles'>
            <Articles/>
            </Route>
            <Route exact path='/songs'>
            <Songs/>
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
