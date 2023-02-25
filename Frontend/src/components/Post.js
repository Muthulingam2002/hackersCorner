import React from "react";
import {
    HeartIcon,
    PaperAirplaneIcon,
    ChatAltIcon,
} from "@heroicons/react/solid";
import Logo from "../assests/malware.png";

const Post = () => {
    const name = "hacker";
    const time = "8:10";
    return (
        <div className="bg-[#1f2937] mt-2 sm:p-2 p-1 rounded-md text-gray-500">
            <div className=" flex justify-between items-center">
                {/* <div className="Left flex items-center space-x-2"> */}
                    <div className=" bg-white  p-2  flex rounded-md w-full">
                        <img
                            className="rounded-full h-6  object-contain"
                            src={Logo}
                            alt=""
                        />
                        <p>Muthulingam</p>
                    </div>
                    {/* <div className="Name-Time text-[10px] sm:text-sm">
                        <p>{name}</p>
                        <p>
                            time
                            {new Date(
                                +Info?.Time?.timestampValue?.seconds * 1000
                            ).toLocaleString()}
                        </p>
                    </div> */}
                {/* </div> */}
                <div className="Right">
                    {/* <DotsHorizontalIcon className="sm:h-6 h-4" /> */}
                </div>
            </div>
            <hr className="mt-1 bg-slate-100" />

            <div className="bg-white rounded-md m-2">
                <img
                    src={Logo}
                    className="h-[150px] w-[150px] mx-auto"
                    alt=""
                />
            </div>

            {/* <hr className="mt-1 bg-slate-100" />

            <div className="P-2 py-2">
                <p className="text-xs sm:text-sm">{time}</p>
        </div> */}

            {/* {Info?.Image?.stringValue ? (
                <div className="P-3">
                    <img
                        src={Logo}
                        className="h-[150px] w-[150px] mx-auto"
                        alt=""
                    />
                </div>
            ) : (
                ""
            )} */}

            <hr className="mt-1" />
            <div className="P-4 flex items-center justify-between py-1">
                <HeartIcon
                    className="h-7  hover:scale-125 cursor-pointer  transition-all duration-150 ease-out"
                    // onClick={like}
                />
                <PaperAirplaneIcon className="h-7  hover:scale-125 cursor-pointer  transition-all duration-150 ease-out" />
                <ChatAltIcon className="h-7  hover:scale-125 cursor-pointer  transition-all duration-150 ease-out" />
            </div>
        </div>
    );
};

export default Post;
