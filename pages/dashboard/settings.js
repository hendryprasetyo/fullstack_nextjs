import axios from "axios";
import { useState } from "react";
import Loading from "../../components/Loading";
import DashboardPopup from "../../components/controls/popup/DashboardPopup";
import Nav from "../../components/nav/Nav";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

export default function settings() {
  const [nas, setNas] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msgErr, setMsgErr] = useState(false, "");
  const [loading, setLoading] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);

  const Edit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put("/api/auth/edit", {
        nas: nas,
        name: name,
        username: username,
        password: password,
        newPassword: newPassword,
      });
      setLoading(false);
      setMsgSuccess("Edit Successfuly!");
    } catch (error) {
      if (error.response) {
        setLoading(false);
        setMsgErr(error.response.data.msg);
      }
    }
  };
  return (
    <>
      <div className="h-screen w-full bg-gray-200">
        {/* modal error */}
        <DashboardPopup
          trigger={msgErr}
          setTrigger={setMsgErr}
          title={msgErr}
          icon={
            <BiErrorCircle className="text-9xl flex items-center justify-center text-red-500" />
          }
          btn="oke"
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {/* modal success */}
        <DashboardPopup
          trigger={msgSuccess}
          setTrigger={setMsgSuccess}
          title={msgSuccess}
          icon={
            <AiOutlineCheckCircle className="text-9xl flex items-center justify-center text-green-400" />
          }
          btn="oke"
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {/* Loading component */}
        <Loading trigger={loading} />

        <Nav />
        <div className=" xl:w-11/12 3xl:w-full flex  justify-center mx-auto w-full mt-20">
          <div className="border-b-2  md:flex flex justify-center bg-red-200 2xl:w-full">
            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-blue-200 shadow-md">
              <div className="flex justify-between">
                <span className="text-xl font-semibold block">
                  Admin Profile
                </span>
                <a
                  href="#"
                  className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                >
                  Edit
                </a>
              </div>
              <span className="text-gray-600">
                This information is secret so be careful
              </span>
              <div className="w-full p-8 mx-2 flex justify-center">
                <img
                  id="showImage"
                  className="max-w-xs w-32 items-center border"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
              <div className="rounded  shadow p-6">
                <form onSubmit={Edit}>
                  <div className="pb-6">
                    <label
                      htmlFor="name"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      NAS
                    </label>
                    <div className="flex">
                      <input
                        id="username"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="integer"
                        defaultValue="Jane Name"
                        value={nas}
                        onChange={(e) => setNas(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="name"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Full Name
                    </label>
                    <div className="flex">
                      <input
                        id="username"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="text"
                        defaultValue="Jane Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="pb-4">
                    <label
                      htmlFor="about"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Username
                    </label>
                    <input
                      id="email"
                      className="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      defaultValue="example@example.com"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="name"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Password
                    </label>
                    <div className="flex">
                      <input
                        id="username"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="password"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="name"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      New Password
                    </label>
                    <div className="flex">
                      <input
                        id="username"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="password"
                        placeholder="*******"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="rounded-xl py-1 bg-yellow-300 flex justify-center w-16 text-lg h-9">
                    <button type="submit">save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
