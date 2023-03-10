import React, { useEffect, useState, useRef } from "react";
import Logo from "../assests/malware.png";
import { PlusCircleIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import { useSelector } from "react-redux";
import { Cloudinary } from "cloudinary-core";
import axios from "axios";

const InputBox = () => {
    let [Text, setText] = useState("");
    let Picker = useRef(null);
    let [File, setFile] = useState(null);
    let [uploadfile, setUploadFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const { user } = useSelector((state) => state.users);
    const cl = new Cloudinary({
        cloud_name: "dqalbizzj",
    });

    const handleUpload = async () => {
        console.log("handling upload");
        const formData = new FormData();
        formData.append("file", uploadfile);
        formData.append("upload_preset", "zexonrda");
        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dqalbizzj/image/upload`,
                formData
            );
            console.log(response.data);
            setImageUrl(response.data.secure_url);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    useEffect(() => {
        console.log("uploading....");
        const upload = async () => {
            if (imageUrl) {
                
                const res = await axios.post(
                    `${process.env.REACT_APP_URL}posts/addPost`,
                    {
                        user_id: user.id,
                        name: user.name,
                        avatar: user.avatar,
                        image: imageUrl,
                        caption: Text,
                    }
                );
                RemoveImage();
                setText("");
            }
        };
        upload();
    }, [imageUrl]);

    const handleBold = () => {
        setText((prevText) => prevText + "**bold text**");
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        setUploadFile(e.target.files[0]);
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setFile(readerEvent.target.result);
        };
    };

    let RemoveImage = () => {
        setFile(null);
    };

    return (
        <>
            <div className="flex flex-col bg-[#14253D] lg:w-[50%] w-[90%] mx-auto mt-5 p-2 rounded-md space-y-3 ">
                <div className="flex w-[full] justify-between ">
                    <img
                        className="h-8 w-8 bg-blue-200 rounded-full p-1"
                        src={user.avatar}
                    />
                    <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-200 rounded-2xl">
                        {user.name}
                    </div>
                </div>
                <div className="Top text-xs   rounded-xl flex items-center bg-[#1f2937] space-x-2">
                    <textarea
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        value={Text}
                        className="w-[100%]  rounded-xl bg-[#374151] outline-none focus:outline-none p-[8px] sm:p-3 h-[200px] resize-none text-white font-sans text-sm "
                        Text="text"
                        placeholder={`Whats in Your Mind `}
                    />
                </div>
                {File ? (
                    <div
                        onClick={() => {
                            RemoveImage();
                        }}
                        className="flex justify-center items-center"
                    >
                        <img
                            src={File}
                            className="h-[150px] object-contain bg-white hover:transform"
                            alt=""
                        />
                    </div>
                ) : (
                    ""
                )}

                {Text || File ? (
                    <button
                        onClick={handleUpload}
                        className="p-[2px] sm:p-3 bg-blue-200 lg:w-[20%] mx-auto w-[40%] text-gray-600 rounded-full sm:text-sm text-[10px]"
                    >
                        Add Post
                    </button>
                ) : (
                    ""
                )}

                <hr className="h-[3px] bg-[#6b717a] border-none rounded-full" />

                <div className="Bottom flex justify-center p-1 sm:text-sm text-[10px] text-white">
                    {/* <div className="A flex items-center cursor-pointer">
                        <img
                            className="hover:animate-pulse sm:h-[30px] h-[15px]"
                            src="/Emoji/Facebook.png"
                            alt=""
                        />
                        <p className="p-1">Live Camera</p>
                    </div> */}

                    <div
                        onClick={() => {
                            Picker.current.click();
                        }}
                        className="B flex items-center cursor-pointer"
                    >
                        <img
                            className="hover:animate-spin sm:h-[30px] h-[15px] "
                            src="/Emoji/Photos.png"
                            alt=""
                        />
                        <PlusCircleIcon className="h-7  hover:scale-125 cursor-pointer  transition-all duration-150 ease-out" />
                        <input
                            ref={Picker}
                            hidden
                            type="file"
                            id="file"
                            onChange={addImageToPost}
                        />
                    </div>

                    {/* <div className="C flex items-center cursor-pointer">
                        <img
                            className="hover:animate-bounce sm:h-[30px] h-[15px]"
                            src="/Emoji/Smile.png"
                            alt=""
                        />
                        <p className="p-1">Activity</p>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default InputBox;
