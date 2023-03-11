import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/users/userSlice";
import logo from "../assests/hackerzCornerLogo.png";
console.log("logoo", logout);

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const { user } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <nav className="w-full text-white font-semibold shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between h-[4rem] md:block">
                        <Link to="/home">
                            <img
                                src={logo}
                                className="lg:h-full lg:w-full h-[80px]"
                                alt=""
                                srcset=""
                            />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className=" hover:text-indigo-200">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className=" hover:text-indigo-200">
                                <Link to="/hackathons">Hackathons</Link>
                            </li>
                            <li className=" hover:text-indigo-200">
                                <Link to="/jobs">Jobs</Link>
                            </li>{" "}
                            <li className=" hover:text-indigo-200">
                                <Link to={`/dashboard/${user.leetcodeid}`}>
                                    Dashboard
                                </Link>
                            </li>
                            {/* <li className=" hover:text-indigo-200">
                                <Link to="">About US</Link>
                            </li>
                            <li className=" hover:text-indigo-200">
                                <Link to="">Contact US</Link>
                            </li> */}
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            {user ? (
                                <div className="md:hidden">
                                    <Link
                                        to="/login"
                                        className="px-2 py-2 bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                        onClick={handleLogout}
                                    >
                                        {/* {user.username}
                                         */}
                                        Logout
                                    </Link>
                                </div>
                            ) : (
                                <div className="hidden space-x-2 md:inline-block">
                                    <Link
                                        to="/login"
                                        className="px-4 py-2 bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {user ? (
                    <Link to="/login" onClick={handleLogout}
                    className="bg-slate-200 p-1 hidden rounded-full lg:inline-block">
                        <img
                            src={user.avatar}
                            className="hidden h-8 w-8 rounded-full md:inline-block"
                        />
                        {/* {user.username}
                         */}
                        {/* Logout */}
                    </Link>
                ) : (
                    <div className="hidden space-x-2 ">
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        >
                            Sign in
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                        >
                            Sign up
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
