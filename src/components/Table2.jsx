import React, { Component } from 'react';
import ServerTable from 'react-strap-table';
import axios from "axios"

const url = 'https://5efe2a74dd373900160b3f24.mockapi.io/api/users';
const columns = ['id', 'name', 'email', 'created_at'];
const options = {
    headings: {id: '#', created_at: 'Created At'},
    sortable: ['name', 'email'],
    requestParametersNames: {query: 'search', direction: 'order'},
};

export default function Table_strap(){
    return (  
        <ServerTable columns={columns}  
	    url={url}  
	   options={options} 
	   bordered hover/>  
    );
}