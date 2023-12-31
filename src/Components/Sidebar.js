import React from 'react'
import '../App.css';


// import sidebar data
import {SidebarData} from './SidebarData';
import { useState } from 'react';

function Sidebar() {


  return (
    <div className='Sidebar' >

        <ul className='SidebarList'>
      {SidebarData.map((val,key)=> {
       
       return (
        <li key={key} 
        className='row'
        onClick={() => {window.location.pathname = val.link}}>
            {" "}

            <div id='title'>{val.title}</div>


        </li>



       )
      }
      
      
      )}
      </ul>
    </div>
  )
}

export default Sidebar
