import Head from "next/head";
import Fetaures from "./components/Features/Fetaures";
import PizzaList from "./pizzaList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Bhai Food Delivery</title>
        <meta
          name="description"
          content="Best Pizza delivery super shop in town"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Fetaures /> */}
      {/* <PizzaList /> */}
    </>
  );
}
