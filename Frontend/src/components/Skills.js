import React, { useState } from "react";
import { useSelector } from "react-redux";

const SkillForm = () => {
    const { user } = useSelector((state) => state.users);
    const [skills, setSkills] = useState(user.skills);

    return (
        <div className="p-4">
            <div className="mt-8">
                <h2 className="text-3xl text-white font-bold mb-4">
                    My Skills
                </h2>
                <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-x-20 gap-x-3 ">
                    {skills?.map((skill, index) => (
                        <div
                            key={index}
                            // className="mb-4 flex items-center text-center space-x-3 p-2  bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 shadow-sm shadow-black"
                            className="mb-4 flex items-center text-center space-x-3 bg-[url(https://laracasts.com/images/forum/upper-gradient.svg)] bg-no-repeat p-2 rounded-md border border-[#328af121] "
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-16 h-16 object-cover"
                            />
                            <h3 className="lg:text-lg  text-sm font-bold  mb-2 text-white">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillForm;
