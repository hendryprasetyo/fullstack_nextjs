import { useState } from "react";
import { authPage } from "../../../middlewares/authorizationPage";

import axios from "axios";
import Router from "next/router";
import Head from "next/head";
import moment from "moment";

import Nav from "../../../components/nav/Nav";
import Modal from "../../../components/controls/dialogPopup/Modal";
import Footer from "../../../components/footer/Footer";
// import { FadeLoader } from "react-spinners";
// import Form from "../../components/atendance/Form";

export async function getServerSideProps(ctx) {
  const { token } = await authPage(ctx);

  const atendanceReq = await fetch("http://localhost:3000/api/atendance", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const atendance = await atendanceReq.json();
  return {
    props: {
      atendance: atendance.data,
    },
  };
}

export default function atendance(props) {
  const [log, setLog] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const logout = async () => {
    await axios.post("/api/auth/logout");
    Router.push("/auth/login");
  };

  function handlerOut() {
    setLog(true);
  }
  function chckinHandler() {
    Router.push("/dashboard/atendance/in");
  }
  function chckoutHandler() {
    Router.push("/dashboard/atendance/out");
  }

  return (
    <>
      <Head>
        <title>List Atendance</title>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </Head>

      <main className="bg-blueGray-200">
        <Nav setTrigger={handlerOut} />
        <Modal
          trigger={log}
          setTrigger={setLog}
          setTriggerOke={logout}
          p="Are you sure you want to exit? after this you have to log back in."
        />
        <section className="py-1 h-screen">
          <div className="w-full xl:w-8/12 2xl:10/12 3xl:container mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700 flex justify-center">
                      Atendance List
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent  w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-green-200 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        No
                      </th>
                      <th className="px-6 bg-green-200 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Name
                      </th>
                      <th className="px-6 bg-green-200 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        NAS
                      </th>
                      <th className="px-6 bg-green-200 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        STATUS
                      </th>
                      <th className="px-6 bg-green-200 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.atendance.map((atendance, i) => (
                      <tr key={atendance.id}>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {i + 1}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {atendance.name}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {atendance.nas}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {atendance.status}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {moment(atendance.updated_at).format(
                            "ddd D MMM YYYY, h:mm:ss"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2">
            <button
              onClick={chckinHandler.bind(this)}
              className="rounded-2xl h-8 w-14 bg-green-700 text-zinc-200 transition hover:bg-green-600 hover:text-zinc-800"
            >
              In
            </button>
            <br />
            <button
              onClick={chckoutHandler.bind(this)}
              className="rounded-2xl h-8 w-16 bg-yellow-300 text-zinc-900 transition hover:bg-yellow-200 hover:text-zinc-800"
            >
              Out
            </button>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
