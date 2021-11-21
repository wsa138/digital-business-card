import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardHead from './components/CardHead';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';

ReactDOM.render(
  <React.StrictMode>
    <CardHead />
    <CardBody />
    <CardFooter />
  </React.StrictMode>,
  document.getElementById('root')
);
