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
                <div className="grid grid-cols-2 gap-x-24">
                    {skills?.map((skill, index) => (
                        <div
                            key={index}
                            className="mb-4 flex items-center text-center space-x-3 bg-gray-600 p-2 rounded-md"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-16 h-16 object-cover"
                            />
                            <h3 className="text-lg font-bold  mb-2 text-white">
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
