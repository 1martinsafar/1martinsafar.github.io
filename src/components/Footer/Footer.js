import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
    return (
        <div className={css.Footer}>
            <h2 className={css.Headline}>Gmail</h2>
            <span className={css.Email}>1martinsafar@gmail.com</span>
            <nav>
                <a
                    className={css.GitHub}
                    href="https://github.com/1martinsafar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    className={css.LinkedIn}
                    href="https://www.linkedin.com/in/martin-safar-b65b18154/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className={css.Twitter}
                    href="https://twitter.com/1martinsafar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>
            </nav>
        </div>
    );
};

export default Footer;
