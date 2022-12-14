import { useState } from "react";
import { unauthPage } from "../middlewares/authorizationPage";

import Head from "next/head";
import Router from "next/router";

import NavMobileHome from "../components/nav/NavMobileHome";
import Hero from "../components/hero";
import About from "../components/about/About";
import Galery from "../components/galery/Galery";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export async function getServerSideProps(ctx) {
  // cookie  handler for routing
  await unauthPage(ctx);

  return {
    props: {},
  };
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  function handlerLogin(e) {
    e.preventDefault();
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
    Router.push("/auth/login");
  }
  return (
    <>
      <Head>
        <title>Atendance</title>
      </Head>
      <div className="bg-gray-200 scroll-smooth">
        <NavMobileHome />
        <Hero />
        <Galery />
        <About />
        <Contact />
        <Footer
          home="Home"
          about="About"
          galery="Galery"
          pres="Prestation"
          contact="Contact"
        />
      </div>
    </>
  );
}
