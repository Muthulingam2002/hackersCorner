import React from "react";

const Projects = ({ image, description ,title}) => {
    return (
        <div className="w-[90%]">
            <div>
                <img src={image} alt="" srcset="" />
            </div>
            <div id="projectDescription">
                <p>{title}</p>
                <p>{description }</p>
            </div>
        </div>
    );
};

const ProjectContainer = () => {
    return (
        <div>
            <Projects />
            <Projects />
            <Projects />
        </div>
    );
};

export default ProjectContainer;
