import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import './App.css';


function App() {
  return (
    //BEM className convention
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/search/:searchterm">
          <div className="App__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="App__page">
              <Sidebar />
              <RecommendedVideos />
            </div>

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
