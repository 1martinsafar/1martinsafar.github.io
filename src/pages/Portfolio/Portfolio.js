import React from 'react';
import css from './Portfolio.module.css';
import projectData from '../../project-data/projectData';

import Project from '../../components/Project/Project';
import Footer from '../../components/Footer/Footer';

const renderProjects = (projectData, isDesktop) => {
    let projects = [];
    const length = projectData.length;

    for (let i = 0; i < projectData.length; i += 3) {
        projects.push(
            <div key={Math.random()} className={css.ProjectWrapper}>
                <Project
                    isDesktop={isDesktop}
                    image={projectData[i].image}
                    heading={projectData[i].heading}
                    linkCheck={projectData[i].linkCheck}
                    linkFiles={projectData[i].linkFiles}
                    skills={projectData[i].skills}
                    description={projectData[i].description}
                />
                {i + 1 < length - 1 && (
                    <Project
                        isDesktop={isDesktop}
                        image={projectData[i + 1].image}
                        heading={projectData[i + 1].heading}
                        linkCheck={projectData[i + 1].linkCheck}
                        linkFiles={projectData[i + 1].linkFiles}
                        skills={projectData[i + 1].skills}
                        description={projectData[i + 1].description}
                    />
                )}
                {i + 2 < length - 1 && (
                    <Project
                        isDesktop={isDesktop}
                        image={projectData[i + 2].image}
                        heading={projectData[i + 2].heading}
                        linkCheck={projectData[i + 2].linkCheck}
                        linkFiles={projectData[i + 2].linkFiles}
                        skills={projectData[i + 2].skills}
                        description={projectData[i + 2].description}
                    />
                )}
            </div>
        );
    }
    return projects;
};

const Portfolio = props => {
    const isDesktop = props.isDesktop;
    const projects = renderProjects(projectData, isDesktop);

    return (
        <React.Fragment>
            <div className={css.Portfolio}>
                <div className={css.Wrapper}>{projects}</div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Portfolio;
