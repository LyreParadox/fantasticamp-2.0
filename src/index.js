import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// this tells the file to import the App FUNCTION from app.js (which is in the same folder) technically we don't even have to use the App name here, since there's only one export from the App file (Module). We could name it anything (but don't, it would be confusing)
import App from './App';
// if we were importing a named export from App.js it would look like this: (and of course here we have to use the specific name of what we're exporting)
// import { App } from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
