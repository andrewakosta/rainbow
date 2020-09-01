import React from 'react';

import Form from './Form'
import logo from '../assets/logo.png'

const NavBar = ({setTopic}) => {
    return ( 
        <div className="nav-container">
            <div className="logo-container">
                <img src={logo} alt="Logo"/>
            </div>
            <Form setTopic={setTopic}/>
        </div>
     );
}
 
export default NavBar;