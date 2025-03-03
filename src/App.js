import React from "react";
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from "./SearchPage";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>

          <Route path="/search/:searchTerm">
          <div className="app_page">
            <Sidebar />
            <SearchPage />
          </div>
          </Route>

          <Route path="/">
              <div className="app_page">
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

//https://5a4608eb6a25.ngrok.io