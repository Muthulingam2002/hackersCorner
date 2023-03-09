import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDetails } from "../redux/users/userSlice";

function UserForm() {
    const [leetcodeid, setleetid] = useState(null);
    const [position, setPosition] = useState(null);
    const [institution, setInstitution] = useState(null);
    const [description, setDescription] = useState(null);

    const dispatch = useDispatch();
    const { isLoading, isSuccess, isError, message, user } = useSelector(
        (state) => state.users
    );

    console.log("users", user);

    // const handleSubmit = async () => {
    //     const newData = {
    //         id: user.id,
    //         avatar: uploadImage,
    //         leetcodeid: leetcodeid,
    //         position: position,
    //         institution: institution,
    //         description: description,
    //         skills: skills,
    //     };
    //     try {
    //         console.log("edit", newData);
    //         // dispatch(editDetails(newData));
    //     } catch (err) {
    //         alert(err.message);
    //     }
    // };

    return (
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
                            onChange={(e) => setleetid(e.target.value)}
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
                            onChange={(e) => setPosition(e.target.value)}
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
                            onChange={(e) => setInstitution(e.target.value)}
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
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                </form>
            </div>
            <button
                // onClick={handleSubmit}
                className="px-4 py-2 bg-gray-600 rounded-md shadow hover:bg-blue-800 text-white"
            >
                Update
            </button>
        </div>
    );
}

export default UserForm;
