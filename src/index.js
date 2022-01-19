import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import "./styles.css";

function App() {
  return (
  <div className="page">
    <Header />,
    <MainContent />,
    <Footer />,
  </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));