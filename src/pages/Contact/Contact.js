import React from 'react';
import css from './Contact.module.css';

const Contact = () => {
    return (
        <div className={css.Contact}>
            <div className={css.Wrapper}>
                <h1 className={css.Headline}>CONTACT INFORMATION</h1>
                <p>I currently reside in Brno, Czech Republic (Czechia).</p>
                <div className={css.Info}>
                    <div className={css.Content}>
                        <h2 className={css.Headline}>EMAIL</h2>
                        <span className={css.Email}>
                            1martinsafar@gmail.com
                        </span>
                    </div>

                    <div className={css.Content}>
                        <h2 className={css.Headline}>SOCIAL</h2>
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
                </div>
            </div>
        </div>
    );
};

export default Contact;
