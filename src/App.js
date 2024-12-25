import './App.css';
import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import News from './Component/News';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  pageSize=5;
  render() {
    return (
      <div>
        <Router>
          <div>
          
            <NavBar />
            
            <Routes>
              <Route path="/business" element={<News pageSize={this.pageSize} country="us" category="business" />} />
              <Route path="/entertainment" element={<News pageSize={this.pageSize} country="us" category="entertainment" />} />
              <Route path="/general" element={<News pageSize={this.pageSize} country="us" category="general" />} />
              <Route path="/health" element={<News pageSize={this.pageSize} country="us" category="health" />} />
              <Route path="/science" element={<News pageSize={this.pageSize} country="us" category="science" />} />
              <Route path="/sports" element={<News pageSize={this.pageSize} country="us" category="sports" />} />
              <Route path="/technology" element={<News pageSize={this.pageSize} country="us" category="technology" />} />
              
            </Routes>
          </div>
        </Router>
        
      </div>
    );
  }
}
