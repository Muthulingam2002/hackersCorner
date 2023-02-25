import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
// import background from "../../assests/cinemaback.jpg";
// import glass from "../../assests/3dGlass.png";
// import clamp from "../../assests/clamp.png";
import { Link, useNavigate } from "react-router-dom";
// import { login, register } from "../../redux/users/userSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    // const dispatch = useDispatch();
    // const { isLoading, isSuccess, isError, message } = useSelector(
    //     (state) => state.users
    // );

    // const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData = { username, email, password };
        const res = await axios.post("http://localhost:5000/register", {
            username,
            email,
            password,
        });
        alert(res.data)
        // dispatch(register(userData));
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
                    <h3>SignUp</h3>
                    <label for="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="your username"
                        onChange={(e) => setName(e.target.value)}
                        value={username}
                        id="username"
                    />
                    <label for="Email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email or Phone"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="email"
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
                            register
                        </button>
                    </div>
                    <br></br>
                    <p className="py-8">
                        <span className="text-gray-600">registered user?</span>{" "}
                        <Link to="/">Login</Link>
                    </p>
                </form>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
}

export default SignUp;
