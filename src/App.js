import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Feed */}
        {/* Widgets */}
      </div>

        

    </div>
  );
}

export default App;
