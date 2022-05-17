import React from 'react';

import search from "../images/search.svg";
import {NavLink} from "react-router-dom";
import movie from '../images/Movie.svg';
import home from "../images/home.svg";
import favourite from "../images/favourite.svg"
import "./NavBar.css"

 const NavBar = () => {
    return (
        <div className='navBar'>
            <NavLink to={'/'}>
                <img className='navImg' src={home} alt="home"/>
            </NavLink>
            <NavLink to={'/genres'}>
                <img className='navImg' src={movie} alt="genres"/>
            </NavLink>
            <NavLink to={'/search'}>
                <img className='search' src={search} alt="favourite"/>
            </NavLink>
            <NavLink to={'/top_rated'}>
                <img className='top' src={favourite} alt="top"/>
            </NavLink>

        </div>
    );
};
export default NavBar