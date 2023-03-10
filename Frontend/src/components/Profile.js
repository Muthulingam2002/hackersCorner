import React from "react";
import { useSelector } from "react-redux";
import profile from "../assests/hackerzCornerLogo.png";
import SkillForm from "./Skills.js";
import { PencilAltIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Profile() {
    const { user } = useSelector((state) => state.users);

    return (
        <div className="flex flex-col m-5 w-full items-center   ">
            <div className="flex relative flex-col m-5 lg:w-[50%] items-center p-3 rounded-lg h-full w-full bg-[#151f32] bg-[url(https://laracasts.com/images/forum/upper-gradient.svg)] bg-no-repeat border border-slate-600 ">
                <div className="bg-slate-200 p-1 rounded-full">
                    <img
                        className="h-20 w-20 rounded-full bg-slate-400"
                        src={user.avatar}
                        alt=""
                        srcset=""
                    />
                </div>

                {/* <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
                    <div
                        class="rounded-lg shadow-xl bg-gray-900 text-white"
                        style={{width:"450px"}}
                    >
                        <div class="border-b border-gray-800 px-8 py-3">
                            <div class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                            <div class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                            <div class="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                        </div>
                        <div class="px-8 py-6">
                            <p>
                                <em class="text-blue-400">const</em>{" "}
                                <span class="text-green-400">aboutMe</span>{" "}
                                <span class="text-pink-500">=</span>{" "}
                                <em class="text-blue-400">function</em>(){" "}
                            </p>
                            <p>
                                &nbsp;&nbsp;
                                <span class="text-pink-500">return{"{" }</span>
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                                <span class="text-yellow-300">
                                    {user.name}
                                </span>
                                ,
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
                                <span class="text-yellow-300">
                                    {user.position}
                                </span>
                                ,
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;description:{" "}
                                <span class="text-yellow-300">
                                    '
                                    <a
                                        href="https://scottwindon.com"
                                        target="_blank"
                                        class="text-yellow-300 hover:underline focus:border-none"
                                    >
                                    {user.description}
                                    </a>
                                    '
                                </span>
                                ,
                            </p>
                            <p>{"}" }</p>
                            <p>&nbsp;&nbsp;</p>
                            <p></p>
                        </div>
                    </div>
                </div> */}

                <Link to="/edit" className="absolute right-6">
                    <PencilAltIcon className="h-7 w-7   text-white" />
                </Link>
                <p className="text-white font-bold mb-8">{user.name}</p>
                <p className="text-white font-bold">💼 {user.position}</p>
                <p className="text-white font-bold">🎓 {user.institution} </p>
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
