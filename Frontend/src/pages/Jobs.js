import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../components/Filters";
import { Oval } from "react-loader-spinner";
import NavBar from "../components/Navbar";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const fetchdata = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_URL}opportunities/jobs`
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
        <div>
            <NavBar />
            <div className="w-full flex items-center justify-center mt-2">
                {jobs.length === 0 ? (
                    <div className=" h-[100vh] flex items-center justify-center">
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
                    <div className="w-[100%] flex flex-col items-center">
                        <div className="ml-[12%] ">{/* <Filter /> */}</div>
                        <div className="space-y-7  lg:w-[50%] lg:mx-auto  w-[80%]">
                            {jobs.map((job) => {
                                return (
                                    <div className="shadow-2xl space-y-6 w-full lg:max-w-full lg:flex border border-gray-400 p-2 rounded-lg  bg-[#151f32] bg-[url(https://laracasts.com/images/forum/upper-gradient.svg)] bg-no-repeat p-2 rounded-md border border-slate-600">
                                        <div className="lg:w-[40%] md:w-[40%] flex items-center justify-center">
                                            <img
                                                className="object-fit border border-gray-200 m-5 rounded-md h-[80%] shadow-md  object-fit"
                                                src={
                                                    job.banner_mobile.image_url
                                                }
                                                alt="thumbnail "
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col justify-between leading-normal w-full">
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
                                                    Salary
                                                    <span className="font-bold">
                                                        {job.jobDetail
                                                            ? " ₹" +
                                                              job.jobDetail
                                                                  .max_salary
                                                            : "Not disclosed"}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="flex items-center">
                                                <img
                                                    className="w-10 h-10 rounded-full mr-4 object-fit bg-slate-500"
                                                    alt="Avatar of Jonathan Reinink"
                                                    src={job.logoUrl2}
                                                />
                                                <p>{job.organization_name}</p>
                                                <div className="text-6 font-medium flex justify-between w-full">
                                                    <p className="text-white leading-none">
                                                        {job.organisation.name}
                                                    </p>
                                                    <p className="text-white">
                                                        {
                                                            job.time_left_to_submission
                                                        }
                                                    </p>
                                                </div>
                                                <a
                                                    href={
                                                        "https://unstop.com/" +
                                                        `${job.public_url}`
                                                    }
                                                >
                                                    <button className="px-4 py-2 bg-blue-400 rounded-md shadow hover:bg-blue-300  text-white   ">
                                                        apply
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Jobs;
