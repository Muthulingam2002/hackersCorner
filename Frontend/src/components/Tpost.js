import React, { useState } from "react";
import {
    HeartIcon,
    PaperAirplaneIcon,
    ChatAltIcon,
} from "@heroicons/react/solid";
import Logo from "../assests/malware.png";
import axios from "axios";

function Tpost({ id, name,image, isLiked, caption, avatar }) {
    const [liked, setliked] = useState(isLiked);
    const handleLike = async () => {
        try {
            console.log("change befoer",liked)
            const res = await axios.post(
                "http://localhost:5000/posts/alterLike",
                {
                    id: id,
                    state: !liked,
                }
            );
            setliked(res.data.data[0].isliked);
            console.log("after",liked)
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div class="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto bg-[#14253D] transition duration-500 ease-in-out transform ">
                <div class="flex flex-wrap justify-between items-center p-2 border-b-2  bg-[#081c3d] ">
                    <img
                        class="text-xs mr-2 py-1.5 bg-blue-200 h-12 w-12 rounded-full object-contain  text-gray-600 "
                        //   src={Logo}ei suzhali
                        src={avatar}
                    />

                    <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-200 rounded-2xl">
                        {name}
                    </div>
                </div>
                <div id="caption" className=" bg-[#081c3d] p-3 w-full h-full">
                    <h1 className="text-white">{caption}</h1>
                </div>
                <img
                    alt="blog photo"
                    src={image}
                    class="max-h-60 w-full object-cover"
                />

                <div class="flex flex-wrap p-4 justify-starts items-center border-t-2 pt-5">
                    <div className="P-4 flex w-full items-center justify-between py-1 text-white">
                        {liked ? (
                            <HeartIcon
                                className="h-7  hover:scale-125 cursor-pointer transition-all duration-150 ease-out text-red-500"
                                onClick={handleLike}
                            />
                        ) : (
                            <HeartIcon
                                className="h-7  hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
                                onClick={handleLike}
                            />
                        )}
                        <PaperAirplaneIcon className="h-7  hover:scale-125 cursor-pointer  transition-all duration-150 ease-out" />
                        <ChatAltIcon className="h-7  hover:scale-125 cursor-pointer  transition-all duration-150 ease-out" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tpost;
