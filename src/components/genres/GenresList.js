import React from 'react';
import {NavLink} from "react-router-dom";

const GenresList = ({genre}) => {
    const {name, id} = genre;
    return (
        <div>
        <NavLink to={`/genres/${id}`}>
            <div className={'genre'}>
                <p>{name}</p>
            </div>
        </NavLink>

        </div>
    );
};

export default GenresList;