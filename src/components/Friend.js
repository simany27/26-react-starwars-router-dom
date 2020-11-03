import React from 'react';
import style from '../css_modules/friend.module.css';
import {characters, homePage} from "../utils/Constants";
import {Link} from "react-router-dom";

const Friend = props => {
    let styles = 'w-100 p-1 ';
    if (props.pos === 7) {
        styles += style.bottomLeft;
    }
    if (props.pos === 9) {
        styles += style.bottomRight;
    }
    return (
        <Link className='col-4' to={`/${homePage}/${props.friend}`}>
            <img className={styles} src={characters[props.friend].img} alt={characters[props.friend].name}/>
        </Link>
    );
};

export default Friend;