import React from 'react';
import {NavLink} from 'react-router-dom';

let Header = (props) => (
    <div style={{height:"3em", width:"100%", marginBottom:"10em", padding:"0px", position:"absolute", top:"0", color:"white", backgroundColor:"black" }} className="text-center pt-2 d-flex justify-content-between">
        <p className="mx-4">"Yer a Wizard Harry!"</p>
        <div className="mx-4">
            <NavLink className="mx-4" to="/home">Home</NavLink>
            <NavLink className="mx-4" to="/faq">FAQ</NavLink>
            <NavLink className="mx-4" to="/feed">Feed</NavLink>
        </div>
    </div>

);


export default Header;