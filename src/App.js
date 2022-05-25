import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';

import Header from './components/Header'
import Prototypes from './components/Prototypes'
import Footer from './components/Footer'
import Orders from './components/Orders'
//import { Table } from 'antd';
import ReactDOM from 'react-dom/client';
import Table_strap from './components/Table2';

import React, { Component } from 'react';
import Table1 from './components/Table1';

function App() {
  
  return (

    <>
    <Header />
    <Table_strap />
    <Footer />
    {/* <div className="container">
      <Table_strap />
      <Footer /> 
    </div> */}
     
    </>
    
  );
}


export default App;
