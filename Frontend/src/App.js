import Hackathons from "./pages/Hackathons";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login"
import SignUp from "./pages/Login/SignUp"
import Jobs from "./pages/Jobs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <div className="bg-[#111827] overflow-hidden">
            <BrowserRouter>
                <Navbar className="" />
                <Routes>
                    <Route exact path="/hackathons" element={<Hackathons />} />
                    <Route exact path="/jobs" element={<Jobs />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signUp" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
