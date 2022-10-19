import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { format } from "date-fns";
import { SearchProps } from "utils/types";
import { InfoCard } from "components/InfoCard";

const MOCKED_PARAGRAPH = [
  "Cancellation",
  "Type of place",
  "Price",
  "Rooms and beds",
  "More filters",
];

const Search: NextPage<SearchProps> = (props: SearchProps) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = () => {
    const date = startDate as string | number | Date;
    if (date) {
      return format(new Date(date), "dd MMMM yy");
    }
  };

  const formattedEndDate = () => {
    const date = endDate as string | number | Date;
    if (date) {
      return format(new Date(date), "dd MMMM yy");
    }
  };

  const paragraph = (text: string) => {
    return (
      <p key={text} className="button">
        {text}
      </p>
    );
  };

  const range = `${formattedStartDate()} - ${formattedEndDate()}`;

  return (
    <div>
      <Head>
        <title>Airbnb 2.0 Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />

      <main className="">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-1 mb-8">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {MOCKED_PARAGRAPH.map((item) => paragraph(item))}
          </div>

          {props.searchResults.map((item) => (
            <InfoCard key={item.img} {...item} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  //https://links.papareact.com/isz
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
