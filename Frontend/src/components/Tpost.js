import React from 'react'
import {
    HeartIcon,
    PaperAirplaneIcon,
    ChatAltIcon,
} from "@heroicons/react/solid";
import Logo from "../assests/malware.png";

function Tpost() {
  return (
      <div class="h-[100vh] ">
          <div class="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto bg-[#14253D] transition duration-500 ease-in-out transform ">
              <a href="#" class="w-full block h-full">
                  <div class="flex flex-wrap justify-between items-center p-2 mb-2 border-b-2  bg-[#081c3d] ">
                      <img
                          class="text-xs mr-2 py-1.5 bg-blue-200 h-12 w-12 rounded-full object-contain  text-gray-600 "
                        //   src={Logo}
                          src="https://res.cloudinary.com/dqalbizzj/image/upload/v1677281657/pngwing.com_ubotpa.png"
                      />

                      <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-200 rounded-2xl">
                          Money
                      </div>
                  </div>
                  <img
                      alt="blog photo"
                      src="https://res.cloudinary.com/dqalbizzj/image/upload/v1677287174/posts/j1v01qxquerndwpzaqwu.jpg"
                      class="max-h-60 w-full object-cover"
                  />
                  <div class="flex flex-wrap p-4 justify-starts items-center mt-4 border-t-2 pt-5">
                      <div className="P-4 flex w-full items-center justify-between py-1 text-white">
                          <HeartIcon
                              className="h-7  hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
                              // onClick={like}
                          />
                          <PaperAirplaneIcon className="h-7  hover:scale-125 cursor-pointer  transition-all duration-150 ease-out" />
                          <ChatAltIcon className="h-7  hover:scale-125 cursor-pointer  transition-all duration-150 ease-out" />
                      </div>
                  </div>
              </a>
          </div>
      </div>
  );
}

export default Tpost