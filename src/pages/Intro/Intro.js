import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Intro.module.css';

const Intro = () => {
    return (
        <div className={css.Intro}>
            <div className={css.Content}>
                <h1>Hi, I'm Martin.</h1>
                <h2>Here to check out my portfolio?</h2>
                <NavLink to="/portfolio" className={css.Link}>
                    RIGHT THIS WAY!
                </NavLink>
            </div>
        </div>
    );
};

export default Intro;
