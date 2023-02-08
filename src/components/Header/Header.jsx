import React from "react";

import './Header.css'
import DataCard from '../DataCard/DataCard'
import TimeCard  from "../TimeCard/TimeCard";

const Header = (props) =>{

    return(
        <div className="header">
            <h1 className="header__title">Farm's TODO <i className="fa-solid fa-wheat-awn"></i></h1>
            <div className="header__shadow"></div>
            <DataCard/>
            <TimeCard/>
        </div>
    );
    
}

export default Header