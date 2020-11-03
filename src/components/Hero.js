import React from 'react';
import styles from '../css_modules/hero.module.css';
import {characters} from "../utils/Constants";

const Hero = props => {
    return (
        <section className="float-left w-25 mr-2 row">
            <img className={`${styles.hero} col`} src={characters[props.hero].img} alt={characters[props.hero].name}/>
        </section>
    );
};

export default Hero;