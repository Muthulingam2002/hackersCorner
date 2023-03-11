import Hackathons from "./pages/Hackathons";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import EditDetails from "./pages/EditDetails";
function App() {
    return (
        <div className=" overflow-hidden bg-[url(https://laracasts.com/images/forum/upper-gradient.svg)] bg-[#151f32]  bg-no-repeat">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/hackathons" element={<Hackathons />} />
                    <Route exact path="/jobs" element={<Jobs />} />
                    <Route exact path="/register" element={<SignUp />} />
                    <Route
                        exact
                        path="/dashboard/:leetid"
                        element={<Dashboard />}
                    />
                    <Route exact path="/edit" element={<EditDetails />} />
                    <Route exact path="/home" element={<Posts />} />
                    <Route exact path="/*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
