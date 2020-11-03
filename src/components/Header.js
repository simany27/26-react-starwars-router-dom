import React from 'react';
import Navigation from "./Navigation";
import {characters} from "../utils/Constants";

const Header = props => {
    return (
        <header>
            <Navigation hero={props.hero}/>
            <h1 className="text-center py-3">{characters[props.hero].name}</h1>
        </header>
    );
};

export default Header;