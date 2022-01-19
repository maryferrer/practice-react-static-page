import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import "./styles.css";

function Page() {
  return (
  <div className="page">
    <Header />,
    <MainContent />,
    <Footer />,
  </div>
  )
};

ReactDOM.render(<Page />, document.getElementById("root"));

export default Page;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals