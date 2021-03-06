import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Footer from "./components/Footer";
import Orders from "./components/Orders";
//import { Table } from 'antd';
import ReactDOM from "react-dom/client";
import Table_strap from "./components/Table2";

import React, { Component } from "react";
// import Table1 from './components/Table1';

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import ButtonAppBar from "./components/Up_menu";
// import Advanced_table from "./components/Table_search";
import Search_Table from "./components/Table_search_all";

// import MoveAnother from "./components/move_another";

function App() {
  return (
    <>
      <Header />
      <ButtonAppBar />
      <Search_Table />
      {/* <Table_strap /> */}
      <Footer />
      {/* <div className="container">
      <Table_strap />
      <Footer /> 
    </div> */}
      {/* <MoveAnother /> */}
    </>
  );
}

export default App;
