import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";

function ProgressBox() {
        const [user, setUser] = useState([]);
        const [total, setTotal] = useState([]);
        const [probSolved, setSolved] = useState(null);
        const [err, setError] = useState(null);
        const {leetid} = useParams();
        useEffect(() => {
            const fetchleet = async () => {
                try {
                    const data = await axios.get(
                        `http://localhost:5000/leetcode/${leetid}`
                    );
                    setUser(data.data.userCount);
                    console.log(user);
                    console.log(data.data.total);
                    setTotal(data.data.total);
                    console.log(total);
                } catch (err) {
                    setError(err.response.data);
                }
            };
            fetchleet();
        }, []);
  return (
      <div className="w-full  flex  flex-col justify-center items-center">
          <p className="text-white font-bold text-start lg:w-[50%] ">
              LeetCodeId: {leetid}
          </p>
          {user.length > 0 && (
              <div
                  id="progress-container"
                  className=" lg:w-[50%] w-[90%] flex justify-center items-center  bg-[#151f32] bg-[url(https://laracasts.com/images/forum/upper-gradient.svg)] bg-no-repeat rounded-lg p-7 border border-slate-600 "
              >
                  {console.log("user", user, "total", total)}
                  <div id="progress-circle" className="w-[13rem] p-4">
                      <CircularProgressbarWithChildren
                          value={user[0].count / total[0].count}
                          maxValue={1}
                      >
                          <p className="font-bold text-blue-300 text-3xl">{`${user[0].count}`}</p>
                          <p className=" text-blue-300">problems</p>
                      </CircularProgressbarWithChildren>
                  </div>

                  <div
                      id="progressByDifficulty"
                      className="w-[70%] space-y-10 flex-col justify-center items-center m-5"
                  >
                      <div id="progcount" className="flex items-center">
                          <div className="w-full h-1.5 bg-green-400 rounded-full">
                              <div
                                  className="bg-green-600 h-1.5 rounded-full"
                                  style={{
                                      width: `${
                                          (user[1].count / total[1].count) *
                                              100 +
                                          20
                                      }%`,
                                  }}
                              ></div>
                          </div>
                          <p className="font-bold text-white ml-3">
                              {user[1].count}
                          </p>
                      </div>
                      <div id="progcount" className="flex items-center">
                          <div className="w-full h-1.5 bg-yellow-400 rounded-full">
                              <div
                                  className="bg-yellow-600 h-1.5 rounded-full"
                                  style={{
                                      width: `${
                                          (user[1].count / total[1].count) *
                                              100 +
                                          20
                                      }%`,
                                  }}
                              ></div>
                          </div>
                          <p className="font-bold text-white ml-3">
                              {user[2].count}
                          </p>
                      </div>{" "}
                      <div id="progcount" className="flex items-center">
                          <div className="w-full h-1.5 bg-red-400 rounded-full">
                              <div
                                  className="bg-red-600 h-1.5 rounded-full"
                                  style={{
                                      width: `${
                                          (user[3].count / total[3].count) *
                                              100 +
                                          20
                                      }%`,
                                  }}
                              ></div>
                          </div>
                          <p className="font-bold text-white ml-3">
                              {user[3].count}
                          </p>
                      </div>
                  </div>
              </div>
          )}
      </div>
  );
}

export default ProgressBox