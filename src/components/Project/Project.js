import React from 'react';
import css from './Project.module.css';

import Heading from '../UI/Heading/Heading';
import Text from '../UI/Text/Text';
import Link from '../UI/Link/Link';

const Project = props => {
    const isDesktop = props.isDesktop;
    const image = props.image;
    const heading = props.heading;
    const linkCheck = props.linkCheck;
    const linkFiles = props.linkFiles;
    const skills = props.skills;
    const description = props.description;

    return (
        <div className={css.Project}>
            <div className={css.PictureFrame}>
                {isDesktop ? (
                    <a
                        className={css.ImageLink}
                        href={image}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={image} alt="Portfolio Project" />
                    </a>
                ) : (
                    <img src={image} alt="Portfolio Project" />
                )}
            </div>
            <Heading smallMargin smallFont>
                {heading}
            </Heading>
            <div className={css.Row}>
                <Link solo href={linkCheck || image}>
                    CHECK ME OUT
                </Link>
                {linkFiles && (
                    <Link solo right href={linkFiles}>
                        PROJECT FILES
                    </Link>
                )}
            </div>
            <Heading smallMargin smallFont>
                SKILLS USED
            </Heading>
            <Text>{skills}</Text>
            <Heading smallMargin smallFont>
                DESCRIPTION
            </Heading>
            <Text>{description}</Text>
        </div>
    );
};

export default Project;
