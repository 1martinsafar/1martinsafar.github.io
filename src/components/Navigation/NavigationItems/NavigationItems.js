import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './NavigationItems.module.css';

const NavigationItems = props => (
    <ul className={css.List}>
        {props.isDesktop && (
            <li className={css.Name}>
                <NavLink
                    to="/"
                    className={css.Link}
                    activeClassName={css.active}
                >
                    Martin Safar
                </NavLink>
            </li>
        )}
        <li className={css.Item}>
            <NavLink
                to="/"
                exact
                className={css.Link}
                activeClassName={css.active}
            >
                Home
            </NavLink>
        </li>
        <li className={css.Item}>
            <NavLink
                to="/portfolio"
                className={css.Link}
                activeClassName={css.active}
            >
                Portfolio
            </NavLink>
        </li>
        <li className={css.Item}>
            <NavLink
                to="/about"
                className={css.Link}
                activeClassName={css.active}
            >
                About
            </NavLink>
        </li>
        <li className={css.Item}>
            <NavLink
                to="/contact"
                className={css.Link}
                activeClassName={css.active}
            >
                Contact
            </NavLink>
        </li>
    </ul>
);

export default NavigationItems;
