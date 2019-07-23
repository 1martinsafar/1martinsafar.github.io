import React from 'react';
import css from './About.module.css';

import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <div className={css.About}>
            <div className={css.Wrapper}>
                <div className={css.AboutMe}>
                    <h1 className={css.Headline}>ABOUT ME</h1>
                    <p>
                        I am an aspiring Programmer with skills mainly in React,
                        JavaScript, Redux, Java, HTML, CSS, Node.js, Express.js.
                        <br />
                        I strive to learn to write quality code and explore all
                        kinds of areas in programming.
                        <br /> Working on meaningful projects in friendly
                        atmosphere is what I aim for.
                        <br />
                        Never-ending education, self-study and self-improvement
                        are all very important to me.
                        <br /> I have been working as a React Developer at
                        Student Agency for a bit over a year now.{' '}
                    </p>
                    <p>
                        English <span className={css.Highlight}>C1</span>
                    </p>
                </div>

                <div className={css.Info}>
                    <div className={css.Content}>
                        <h2 className={css.Headline}>WORK EXPERIENCE</h2>
                        <p className={css.Headline}>React Developer</p>
                        <p>Student Agency, Brno, (June 2018 — August 2019)</p>
                        <p>
                            My job was to take over the development of the new
                            reservation system for Regiojet.{' '}
                        </p>
                        <p>
                            As the only Frontend programmer working on this
                            React, Redux, REST application, I got to work on
                            changing all kinds of aspects of the application,
                            from modifying/improving existing parts to creating
                            brand new functionalities, components and pages.
                        </p>
                        <p>
                            I was cooperating closely with the Product/Project
                            managers, Backend Java team and involved in the
                            discussions, decision-making and finding the right
                            solution to make the application more user-friendly
                            while meeting the Company Management's requirements.
                        </p>
                    </div>

                    <div className={css.Content}>
                        <h2 className={css.Headline}>SKILLS</h2>
                        <p>
                            Technologies I am familiar with:
                            <br />
                            <br />
                            <span className={css.Skill}>React</span>
                            <span className={css.Skill}>JavaScript</span> <br />
                            <span className={css.Skill}>Java</span>
                            <span className={css.Skill}>SQL</span> <br />
                            <span className={css.Skill}>HTML</span>
                            <span className={css.Skill}>CSS</span> <br /> <br />
                            <span className={css.Skill}>Git</span>
                            <span className={css.Skill}>
                                GitHub
                            </span> <br /> <br />
                            <span className={css.Skill}>Redux</span>
                            <span className={css.Skill}>Axios</span> <br />
                            <span className={css.Skill}>Express.js</span>
                            <span className={css.Skill}>MongoDB </span> <br />
                            <span className={css.Skill}>C#</span>
                            <span className={css.Skill}>ASP.NET MVC</span>{' '}
                            <br /> <br />
                            <span className={css.Skill}>Sass</span>
                            <span className={css.Skill}>CSS Modules</span>{' '}
                            <br />
                            <span className={css.Skill}>Bootstrap</span>
                            <span className={css.Skill}>
                                Responsive Design{' '}
                            </span>{' '}
                            <br />
                            <span className={css.Skill}>npm</span>
                            <span className={css.Skill}>
                                Webpack
                            </span> <br /> <br />
                            <span className={css.Skill}>
                                Web Security Basics
                            </span>{' '}
                            <br />
                            <span className={css.Skill}>
                                Adobe Photoshop Basics{' '}
                            </span>{' '}
                            <br /> <br />
                            <span className={css.Skill}>
                                Web Design Basics{' '}
                            </span>{' '}
                            <br />
                            <span className={css.Skill}>
                                Website Optimization Basics{' '}
                            </span>{' '}
                            <br />
                            <span className={css.Skill}>
                                Web Accessibility Basics{' '}
                            </span>{' '}
                            <br />
                            <span className={css.Skill}>SVG Basics </span>{' '}
                            <br />
                            <span className={css.Skill}>
                                Angular Basics
                            </span>{' '}
                            <br />
                            <span className={css.Skill}>
                                WebVTT for Captions
                            </span>{' '}
                            <br />
                            <span className={css.Skill}>
                                Chrome Dev Tools
                            </span>{' '}
                            <br />
                        </p>
                    </div>
                </div>

                <div className={css.Info}>
                    <div className={css.Content}>
                        <h2 className={css.Headline}>
                            EDUCATION &#38; SELF STUDY
                        </h2>
                        <p>
                            I have earned a Techdegree Certificate in Front End
                            Web Development at Treehouse.
                            <a
                                className={css.Link}
                                href="https://www.credential.net/f8wdkf1o?lipi=urn:li:page:d_flagship3_profile_view_base;8N1haWMiTK6j734W7YFKQA%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <br />
                                See Certificate
                            </a>
                        </p>
                        <p>
                            You can check my{' '}
                            <a
                                className={css.Link}
                                href="https://teamtreehouse.com/martinsafar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Treehouse Profile
                            </a>
                            .
                        </p>
                        <p>
                            Cambridge English: Advanced (CAE) Certificate (C1).
                        </p>
                        <p>
                            College: 2 successfully finished years at: <br />{' '}
                            (Masaryk University in Brno, Czech Republic)
                            majoring in Applied Informatics. <br />
                            <br />
                            I decided to pause my college studies to gain work
                            experience as a programmer in 2018. <br />
                            Resuming my college studies in 2019.
                        </p>
                        <p>
                            My favorite self-study resource:{' '}
                            <a
                                className={css.Link}
                                href="https://www.udemy.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Udemy
                            </a>
                        </p>
                        <p>
                            A few examples of the courses I took at Udemy:
                            <br />
                            <a
                                className={css.LinkSolo}
                                href="https://www.udemy.com/java-the-complete-java-developer-course/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Java Developer
                            </a>
                            <br />
                            <a
                                className={css.LinkSolo}
                                href="https://www.udemy.com/react-the-complete-guide-incl-redux/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                React and Redux
                            </a>
                            <br />
                            <a
                                className={css.LinkSolo}
                                href="https://www.udemy.com/react-native-the-practical-guide"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                React Native
                            </a>
                            <br />
                            <a
                                className={css.LinkSolo}
                                href="https://www.udemy.com/learn-adobe-photoshop-from-scratch/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Photoshop Basics
                            </a>
                            <br />
                            <a
                                className={css.LinkSolo}
                                href="https://www.udemy.com/web-design-secrets/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Web Design
                            </a>
                            <br />
                        </p>
                    </div>

                    <div className={css.Content}>
                        <h2 className={css.Headline}>HOBBIES</h2>
                        <p>
                            <span className={css.Headline}>Programming </span>{' '}
                            => currently Java, Frontend Web Development
                        </p>
                        <p>
                            <span className={css.Headline}>English </span> => I
                            have always been very passionate about English
                            language and have spent a lot of my free time on
                            improving my skills and also learning Standard
                            American Accent. Rachel's English Academy is one of
                            my favorite resources.
                        </p>
                        <p>
                            <span className={css.Headline}>Health </span> =>
                            Feeling healthy and fit increases your productivity,
                            both your body and mind.
                        </p>
                        <p>
                            <span className={css.Headline}>Traveling </span> =>
                            I enjoy traveling, I would love to visit US and
                            Canada.
                        </p>
                        <p>
                            <span className={css.Headline}>Food </span> => I
                            occasionally cook for my family.
                        </p>
                        <p>
                            <span className={css.Headline}>Self-study </span> =>
                            I have been investing majority of my free time in
                            learning, studying and improving myself.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
