import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/API/v1/Moomeadows/Users",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        // Jika respons OK (200), maka redirect ke halaman dashboard
        window.location.href = "/Dashboard";
      } else {
        // Handle error, misalnya menampilkan pesan kesalahan
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-[url('/login-bg.jpg')] bg-cover bg-center h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="w-[400px] h-[500px] rounded-2xl bg-[#dbdbdbfd]">
          <div className="flex justify-center flex-col items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h2 className="text-black m-[50px] text-center text-[2.5rem]">
                WELCOME
              </h2>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="py-1 px-3 rounded-xl border-2 border-gray-800"
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-1 px-3 rounded-xl border-2 border-gray-800"
              />
              <div className="flex flex-row gap-[3rem] text-[15px]">
                <label htmlFor="" className="">
                  <input type="checkbox" name="" id="" /> Remember me
                </label>
                <a href="" className="text-[red]">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="hover:bg-white rounded-xl py-1 bg-[#27ff1c] hover:border-2 hover:border-[#25ff1c] my-5"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
