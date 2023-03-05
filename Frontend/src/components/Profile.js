import React from "react";
import { useSelector } from "react-redux";
import profile from "../assests/hackerzCornerLogo.png";
import SkillForm from "./Skills.js";

function Profile() {
    const { user } = useSelector((state) => state.users);

    return (
        <div className="flex flex-col m-5 w-full items-center ">
            <div className="flex flex-col m-5 w-[50%] items-center p-3 rounded-lg h-full  bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
                <img
                    className="h-20 w-20 rounded-full bg-slate-400"
                    src={user.avatar}
                    alt=""
                    srcset=""
                />
                <p className="text-white font-bold">{user.username}</p>
                <p className="text-white font-bold">student</p>
                <p className="text-white font-bold">
                    Chennai Institute of Technology
                </p>
                <div
                    id="aboutme"
                    className="flex items-center w-[90%] mt-8 py-4 border-t-2"
                >
                    <p className="text-white font-bold text-center">
                        {user.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
