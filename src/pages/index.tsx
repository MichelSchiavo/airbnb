import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/Header";
import { Banner } from "components/Banner";
// import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  );
};

export default Home;
