import Head from "next/head";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { PizzaListStyle } from "@/styles/PizzaList.styles";
import Link from "next/link";
import PizzaCard from "./components/Pizza/PizzaCard";

const Home = ({ pizzaData }) => {
  // method for loading spinner while data fetching
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [pizzaData]);

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
      {/*============= carousel here====== */}

      {/*======= Product fetch here======= */}
      <Box sx={PizzaListStyle.container}>
        <Typography variant="h3" sx={PizzaListStyle.title}>
          {"THE BEST PIZZA IN TOWN"}
        </Typography>
        <Typography sx={PizzaListStyle.desc}>
          {
            "Pizza is a beloved and iconic dish that originated in Italy but has become popular worldwide"
          }
        </Typography>

        <Box sx={PizzaListStyle.ProductHeading}>
          <Typography sx={PizzaListStyle.headerText}>
            {"Latest Pizza"}
          </Typography>
          <Link href="#" sx={PizzaListStyle.linkText}>
            {"See All"}
          </Link>
        </Box>

        <>
          {loading ? (
            <CircularProgress />
          ) : (
            pizzaData.map((pizza, index) => {
              const pizzaObject = pizza.pizza; // extract from main array
              return (
                <Grid
                  sx={PizzaListStyle.wrapper}
                  container
                  spacing={3}
                  key={index}
                >
                  {pizzaObject.map(
                    (pizzaObj, i) => (
                      console.log(pizzaObj),
                      (<PizzaCard key={i} pizzaObj={pizzaObj} />)
                    )
                  )}
                </Grid>
              );
            })
          )}
        </>
      </Box>
    </>
  );
};

// data fetch from server side api
export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/products");
  const pizzaData = await res.json();

  return {
    props: {
      pizzaData,
    },
  };
};

export default Home;
