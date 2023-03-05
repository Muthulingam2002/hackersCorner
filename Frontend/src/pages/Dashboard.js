import React, { useEffect, useState } from "react";
import ProgressBox from "../components/ProgressBox";
import Profile from "../components/Profile";
import SkillForm from "../components/Skills";
import { useSelector } from "react-redux";

function Dashboard() {
    const { user } = useSelector((state) => state.users);
    return (
        <>
            <div
                id="dashboard"
                className=" flex  flex-col justify-center items-center min-h-screen w-full "
            >
                <Profile />
                <ProgressBox />
                <SkillForm />
            </div>
            ;
        </>
    );
}

export default Dashboard;
