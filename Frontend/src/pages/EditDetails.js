import React, { useEffect, useRef, useState } from "react";
import SkillForm from "../components/Skills";
import axios from "axios";
import UserForm from "../components/UserForm";

import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { editDetails } from "../redux/users/userSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/Navbar";

const options = [
    {
        value: "HTML",
        label: "HTML",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677959370/icons/html_lng2on.png",
    },
    {
        value: "CSS",
        label: "CSS",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677959370/icons/css-3_h7z8hu.png",
    },
    {
        value: "JavaScript",
        label: "JavaScript",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677959370/icons/javascript_byxqfz.png",
    },
    {
        value: "React",
        label: "React",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677959369/icons/physics_rbliz0.png",
    },
    {
        value: "React Native",
        label: "React Native",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677959369/icons/physics_rbliz0.png",
    },
    {
        value: "Node.js",
        label: "Node.js",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677959369/icons/node-js_wgsqhd.png",
    },
    {
        value: "Docker",
        label: "Docker",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677959369/icons/docker_hcxv6l.png",
    },
    {
        value: "git",
        label: "git",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677959368/icons/git_fbfy31.png",
    },
    {
        value: "postgres",
        label: "postgres",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677959369/icons/postgresql_ay48ip.png",
    },
    {
        value: "GraphQl",
        label: "GraphQl",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677998801/icons/graphql_pgwdfn.png",
    },
    {
        value: "TypeScript",
        label: "TypeScript",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677998801/icons/typescript_em32vp.png",
    },
    {
        value: "Microsoft Azure",
        label: "Microsoft Azure",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677998800/icons/azure_g5ouop.png",
    },
    {
        value: "Google Cloud Platform",
        label: "Google Cloud Platform",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677998800/icons/google-cloud_y9w7wq.png",
    },
    {
        value: "php",
        label: "php",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677998800/icons/php_gffioc.png",
    },
    {
        value: "mysql",
        label: "mysql",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677998801/icons/mysql_odxmzq.png",
    },
    {
        value: "amazon aws",
        label: "amazon aws",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677998801/icons/amazon-aws_g8saze.png",
    },
    {
        value: "figma",
        label: "figma",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677998800/icons/figma_uxexxr.png",
    },
    {
        value: "bash",
        label: "bash",
        image: "https://res.cloudinary.com/dqalbizzj/image/upload/v1677998800/icons/cmd-setting_cftlkh.png",
    },
];

function EditDetails() {
    const dispatch = useDispatch();
    const { isLoading, isSuccess, isError, message, user } = useSelector(
        (state) => state.users
    );

    const picker = useRef(null);
    const [uploadImage, setUploadImage] = useState(user.avatar);
    const [profileImg, setImageProfile] = useState(user.avatar);
    const [leetcodeid, setleetcodeid] = useState(user.leetcodeid);
    const [position, setPosition] = useState(user.position);
    const [institution, setInstitution] = useState(user.institution);
    const [description, setDescription] = useState(user.description);
    const [skills, setSkills] = useState(user.skills);

    const addimage = (e) => {
        const reader = new FileReader();
        setUploadImage(e.target.files[0]);
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageProfile(readerEvent.target.result);
        };
        reader.onloadend = () => {
            uploadImagetocloud(reader.result);
        };
    };
    const uploadImagetocloud = async (base64EncodedImage) => {
        console.log(base64EncodedImage);
        try {
            const data = await axios.post(
                "http://localhost:5000/details/upload",
                {
                    id: user.id,
                    data: base64EncodedImage,
                }
            );
            console.log(data);
            alert(data.data);
            localStorage.setItem("user", JSON.stringify(data.data));
            toast.success(" profile image uploaded succesfully");
        } catch (err) {
            console.error(err);
            toast.error(err);
        }
    };

    // const handleUpload = async () => {
    //     console.log("handling upload");
    //     const formData = new FormData();
    //     formData.append("file", uploadImage);
    //     formData.append("upload_preset", "zexonrda");
    //     try {
    //         const response = await axios.post(
    //             `https://api.cloudinary.com/v1_1/dqalbizzj/image/upload`,
    //             formData
    //         );
    //         console.log(response.data);
    //         setUploadImage(response.data.secure_url);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };

    const handleSubmit = async () => {
        const newData = {
            id: user.id,
            leetcodeid: leetcodeid,
            position: position,
            institution: institution,
            description: description,
            skills: skills,
        };
        try {
            console.log("edit", newData);
            dispatch(editDetails(newData));
        } catch (err) {
            alert(err.message);
        }
    };

    const handleSkillSelect = (selectedOption) => {
        const newSkill = {
            name: selectedOption.value,
            image: selectedOption.image,
        };
        let uniqueValues = new Set(skills.map((v) => v.name));
        uniqueValues.add(newSkill.name);
        if (uniqueValues.size > skills.length) {
            setSkills([...skills, newSkill]);
            console.log("skills", skills);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="flex flex-col space-y-6 justify-center items-center">
                <div className=" mt-4 flex flex-col justify-center items-center bg-slate-200 rounded-full p-1">
                    <img
                        onClick={() => picker.current.click()}
                        className="h-24 w-24 rounded-full "
                        src={profileImg}
                        alt=""
                        srcset=""
                    />
                </div>
                <input
                    className="hidden"
                    ref={picker}
                    onChange={(e) => addimage(e)}
                    type="file"
                    name=""
                    id=""
                />
                {/* <UserForm /> */}

                <div className="flex w-full items-center justify-center">
                    <div className="w-[50%] overflow-y-hidden">
                        <form className="space-y-6">
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    @
                                </span>
                                <input
                                    type="text"
                                    id="website-admin"
                                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="leetcode id"
                                    value={leetcodeid}
                                    onChange={(e) =>
                                        setleetcodeid(e.target.value)
                                    }
                                />
                            </div>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    💼
                                </span>
                                <input
                                    type="text"
                                    id="website-admin"
                                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="position"
                                    value={position}
                                    onChange={(e) =>
                                        setPosition(e.target.value)
                                    }
                                />
                            </div>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    🎓
                                </span>
                                <input
                                    type="text"
                                    id="website-admin"
                                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="institution"
                                    value={institution}
                                    onChange={(e) =>
                                        setInstitution(e.target.value)
                                    }
                                />
                            </div>
                            <div class="px-4 py-2 bg-white rounded-lg outline-none    dark:bg-gray-800">
                                <label for="comment" class="sr-only">
                                    Your comment
                                </label>
                                <textarea
                                    id="comment"
                                    rows="4"
                                    class="w-full px-0  resize-none text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-none"
                                    placeholder="Description..."
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    required
                                ></textarea>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="w-[50%]">
                    {/* <SkillForm /> */}

                    <div className="p-4">
                        <h1 className="text-2xl text-white font-bold mb-4">
                            Add a Skill
                        </h1>
                        <Select
                            styles={{ backgroundColor: "red" }}
                            options={options}
                            onChange={handleSkillSelect}
                            placeholder="Select a skill"
                        />
                        <div className="mt-8">
                            <h2 className="text-3xl text-white font-bold mb-4">
                                My Skills
                            </h2>
                            <div className="grid grid-cols-2 gap-x-24">
                                {skills &&
                                    skills.map((skill, index) => (
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
                </div>
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-gray-600 rounded-md shadow hover:bg-blue-800 text-white"
                >
                    Update
                </button>
                <ToastContainer />
            </div>
        </div>
    );
}

export default EditDetails;
