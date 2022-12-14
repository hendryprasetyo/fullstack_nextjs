import { authPage } from "../../middlewares/authorizationPage";

import Head from "next/head";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Galery from "../../components/galery/Galery";
import NavMobileHomeDashboard from "../../components/nav/NavMobileHomeDashboard";

export async function getServerSideProps(ctx) {
  const { token } = await authPage(ctx);
  return {
    props: {},
  };
}

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="w-screen h-screen bg-gray-200">
        <Nav atendance="atendance" galery="galery" />
        <NavMobileHomeDashboard />
        <Galery />
        <Footer />
      </div>
    </>
  );
}
