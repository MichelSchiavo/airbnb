import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/Header";
import { Banner } from "components/Banner";
import { HomeProps } from "utils/types";
import { SmallCard } from "components/SmallCard";

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const exploreData = props.exploreData;

  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.img} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  //https://links.papareact.com/pyp
  const exploreData: HomeProps = await fetch(
    "https://www.jsonkeeper.com/b/4G1G"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
    },
  };
}
