import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
// import background from "../../assests/cinemaback.jpg";
// import glass from "../../assests/3dGlass.png";
// import clamp from "../../assests/clamp.png";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../redux/users/userSlice.js";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const dispatch = useDispatch();
    // const { isLoading, isSuccess, isError, username, message } = useSelector(
    //     (state) => state.users
    // );

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        console.log(userData)
        // dispatch(login(userData));
    };

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     if (user || isSuccess) {
    //         navigate("/home");
    //     }
    //     if (isError) {
    //         toast.error(message);
    //     }
    // }, [isSuccess, isError]);
    
    return (
        <div >
            <div className="loginPage">
                <div className="background">
                    {/* <img src={glass} className="glass"></img>
                    <img src={clamp} className="clamp"></img> */}
                </div>
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <label for="username">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email or Phone"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="username"
                    />
                    <label for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="password"
                    />
                    <div className="btn">
                        <button
                            id="submit"
                            type="submit"
                            onClick={handleSubmit}
                            className="btn-grad"
                        >
                            Log In
                        </button>
                    </div>
                    <br></br>
                    <p className="py-8">
                        <span className="text-gray-600">New to CiniDime?</span>{" "}
                        <Link to="/SignUp">Sign Up</Link>
                    </p>
                </form>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
}

export default Login;
