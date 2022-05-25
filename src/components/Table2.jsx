import React, { Component } from 'react';
import ServerTable from 'react-strap-table';
import axios from "axios"

const url = 'https://628defd4368687f3e70cb2fe.mockapi.io/api/v1/';
const columns = ['type', 'r_date', 'r_time', 'product_name','produc_code','account_number','isDifficult','kb_pin','c_name','is_old','branch_name','branch_code','e_name','e_num','isExcept','isOpinion','addrecord','plusrecord','ischeck'];
const options = {
    headings: {id: '#'},
    sortable: ['type', 'r_date'],
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