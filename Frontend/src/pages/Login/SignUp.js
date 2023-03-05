import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
// import background from "../../assests/cinemaback.jpg";
// import glass from "../../assests/3dGlass.png";
// import clamp from "../../assests/clamp.png";
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../../redux/users/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setName] = useState("");
    const [leetID, setLeetID] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.users
    );

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { username, email, password };
        dispatch(register(userData));
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user || isSuccess) {
            navigate("/home");
        }
        if (isError) {
            toast.error(message);
        }
    }, [isSuccess, isError]);

    return (
        <div className="h-full w-full">
            <section className=" min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 bg-[rgba(255, 255, 255, 0.07)] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-2xl text-[#002D74]">
                            Register
                        </h2>
                        {/* <p className="text-xs mt-4 text-[#002D74]">
                            If you are already a member, easily log in
                        </p> */}

                        <form className="flex flex-col gap-4 w-[89%]">
                            <input
                                className="p-2 mt-8 rounded-xl border"
                                type="text"
                                name="username"
                                onChange={(e) => setName(e.target.value)}
                                value={username}
                                placeholder="username"
                            />
                            <input
                                className="p-2 rounded-xl border"
                                type="text"
                                name="email"
                                onChange={(e) => setLeetID(e.target.value)}
                                value={leetID}
                                placeholder="leetcode id"
                            />
                            <input
                                className="p-2 rounded-xl border"
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                            />

                            <input
                                className="p-2 rounded-xl border w-full"
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                            />
                            <button
                                onClick={handleSubmit}
                                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                            >
                                Login
                            </button>
                        </form>

                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div>

                        {/* <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                            <svg
                                className="mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="25px"
                            >
                                <path
                                    fill="#FFC107"
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                />
                                <path
                                    fill="#4CAF50"
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                            </svg>
                            Login with Google
                        </button> */}
                        {/* 
                            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                                <a href="#">Forgot your password?</a>
                            </div> */}

                        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>have an account?</p>
                            <Link to="/login">
                                <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="md:block hidden w-1/2">
                        <img
                            className="rounded-2xl"
                            src="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                        />
                    </div>
                </div>
            </section>
             <ToastContainer />
        </div>
    );
}

export default SignUp;


// {/* <div>
//     <div className="loginPage">
//         <div className="background">
//             {/* <img src={glass} className="glass"></img>
//                     <img src={clamp} className="clamp"></img> */}
//         </div>
//         <form onSubmit={handleSubmit}>
//             <h3>SignUp</h3>
//             <label for="username">Username</label>
//             <input
//                 type="text"
//                 name="username"
//                 placeholder="your username"
//                 onChange={(e) => setName(e.target.value)}
//                 value={username}
//                 id="username"
//             />
//             <label for="username">LeetCodeID</label>
//             <input
//                 type="text"
//                 name="leetcodeId"
//                 placeholder="your leetcode id"
//                 onChange={(e) => setLeetID(e.target.value)}
//                 value={leetID}
//                 id="username"
//             />
//             <label for="Email">Email</label>
//             <input
//                 type="text"
//                 name="email"
//                 placeholder="Email or Phone"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 id="email"
//             />
//             <label for="password">Password</label>
//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 id="password"
//             />
//             <div className="btn">
//                 <button
//                     id="submit"
//                     type="submit"
//                     onClick={handleSubmit}
//                     className="btn-grad"
//                 >
//                     register
//                 </button>
//             </div>
//             <br></br>
//             <p className="py-8">
//                 <span className="text-gray-600">registered user?</span>{" "}
//                 <Link to="/">Login</Link>
//             </p>
//         </form>
//     </div>
//     {/* <ToastContainer /> */}
// </div>; */}