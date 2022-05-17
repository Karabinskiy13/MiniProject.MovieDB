import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import "./Home.css"

import NavBar from "./NavBar"


const Home = () => {

    return (
        <div className='home'>
         <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Home;