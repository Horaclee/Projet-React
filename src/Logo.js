import { logDOM } from "@testing-library/react";
import React, {useState} from "react";
import './App.css';


function Logo() {
    return (
        <div>
            <img style={{cursor : "pointer"}} src="logo.png" />
        </div>
    );
}

export default Logo