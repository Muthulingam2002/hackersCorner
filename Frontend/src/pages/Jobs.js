import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../components/Filters";
import {Oval} from "react-loader-spinner";    

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const fetchdata = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/opportunities/jobs"
            );
            console.log(res.data.data.data);
            setJobs(res.data.data.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchdata();
    }, []);
    return (
        <div className="w-full bg-[#111827] flex items-center justify-center mt-2">
            {jobs.length === 0 ? (
                <div className=" bg-[#111827] h-[100vh] flex items-center justify-center">
                    <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
            ) : (
                <div>
                    <div className="ml-[12%]">
                        {/* <Filter /> */}
                    </div>
                    <div className="space-y-6 w-[50%] mx-auto ">
                        {jobs.map((job) => {
                            return (
                                <a
                                    href={
                                        "https://unstop.com/" +
                                        `${job.public_url}`
                                    }
                                >
                                    <div className="bg-[#374151] max-w-sm m-10 shadow-2xl w-full lg:max-w-full lg:flex border border-gray-400 p-2 rounded-lg ">
                                        <div className="w-[30%] flex items-center justify-center">
                                            <img
                                                className="object-fit border border-gray-200 m-5 rounded-md h-[80%] shadow-md"
                                                src={
                                                    job.banner_mobile.image_url
                                                }
                                                alt="thumbnail "
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col justify-between leading-normal">
                                            <div className="mb-8 ">
                                                {job.status ? (
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
                                                    {job.title}
                                                </div>
                                                <p className="text-white text-base">
                                                    Salary{" ₹"}
                                                    <span className="font-bold">
                                                        {
                                                            job.jobDetail
                                                                .max_salary
                                                        }
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="flex items-center">
                                                <img
                                                    className="w-10 h-10 rounded-full mr-4 object-fit bg-slate-500"
                                                    alt="Avatar of Jonathan Reinink"
                                                    src={job.logoUrl2}
                                                />
                                                <div className="text-sm">
                                                    <p className="text-white leading-none">
                                                        {job.organization_name}
                                                    </p>
                                                    <p className="text-white">
                                                        {
                                                            job.time_left_to_submission
                                                        }
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
            )}
        </div>
    );
};
export default Jobs;
