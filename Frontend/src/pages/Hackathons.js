import React, { useEffect, useState ,useRef} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import Post from "../components/Post";
import Tpost from "../components/Tpost";
function Hackathons() {
    const [events, setEvents] = useState([]);
    const fetchdata = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/opportunities/hackathons"
            );
            console.log(res.data.hackathons);
            setEvents(res.data.hackathons);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchdata();
    }, []);




    return (



        
        <div className="w-full bg-[#111827]">

            <div className="space-y-6 w-[50%] mx-auto ">
                <InputBox />
                {/* <Post/> */}
                <Tpost/>
                <Tpost/>
                
                {events.map((event) => {
                    return (
                        <a href={event.url}>
                            <div className="bg-[#374151] max-w-sm m-10 shadow-2xl w-full lg:max-w-full lg:flex border border-gray-400 p-2 rounded-lg ">
                                <div className="w-[30%] flex items-center justify-center">
                                    <img
                                        className="object-fit border border-gray-200 m-5 rounded-md h-[80%] shadow-md"
                                        src={event.thumbnail_url}
                                        alt="thumbnail "
                                    />
                                </div>

                                <div className="p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8 ">
                                        {event.open_state ? (
                                            <p className="text-sm text-white flex items-center">
                                                <svg
                                                    className="fill-current text-white w-3 h-3 mr-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                                </svg>
                                                open
                                            </p>
                                        ) : (
                                            <p className="text-sm text-white flex items-center">
                                                <svg
                                                    className="fill-current text-white w-3 h-3 mr-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                                </svg>
                                                close
                                            </p>
                                        )}
                                        <div className="text-white font-bold text-xl mb-2">
                                            {event.title}
                                        </div>
                                        <p className="text-white text-base">
                                            Registrations{" "}
                                            <span className="font-bold">
                                                {event.registrations_count}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        {/* <img
                                            className="w-10 h-10 rounded-full mr-4"
                                            alt="Avatar of Jonathan Reinink"
                                            src={event.thumbnail_url}
                                        /> */}
                                        <div className="text-sm">
                                            <p className="text-white leading-none">
                                                {event.organization_name}
                                            </p>
                                            <p className="text-white">
                                                {event.time_left_to_submission}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Hackathons;

// <div
//     key={event.id}
//     className=" p-8 grid grid-col-1  rounded-md  bg-gray-600"
// >
//     <img
//         className="rounded-md"
//         src={event.thumbnail_url}
//         alt=""
//         srcset=""
//     />
//     <h1 className="text-white font-bold">{event.title}</h1>
// </div>
