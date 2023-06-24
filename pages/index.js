import Head from "next/head";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { PizzaListStyle } from "@/styles/PizzaList.styles";
import Link from "next/link";
import PizzaCard from "./components/Pizza/PizzaCard";
import DrinksCard from "./components/Drinks/DrinksCard";
import SaucesCard from "./components/Sauces/SaucesCard";

const Home = ({ pizzaData }) => {
  // method for loading spinner while data fetching
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [pizzaData]);

  const pizzaArray = pizzaData.products.pizza; //pizza data extract from main object
  const drinksArray = pizzaData.products.drinks; //drinks data extract from main object
  const saucesArray = pizzaData.products.sauces; //drinks data extract from main object

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
          <Typography variant="h5">{"Latest Pizza"}</Typography>
        </Box>
        {/* data fetching from pizza array */}
        <>
          {loading ? (
            <CircularProgress />
          ) : (
            <Grid sx={PizzaListStyle.wrapper} container spacing={3}>
              {pizzaArray.map(
                (pizzaObj, i) => (
                  console.log(pizzaObj),
                  (<PizzaCard key={i} pizzaObj={pizzaObj} />)
                )
              )}
              ;
            </Grid>
          )}

          {/* drinks data  */}
          <Box style={{ margin: "2em 0" }} sx={PizzaListStyle.ProductHeading}>
            <Typography variant="h5">{"Latest Drinks"}</Typography>
          </Box>

          <Grid sx={PizzaListStyle.wrapper} container spacing={3}>
            {drinksArray.map(
              (drinksObj, i) => (
                console.log(drinksObj),
                (<DrinksCard key={i} drinksObj={drinksObj} />)
              )
            )}
            ;
          </Grid>

          {/* sauces data */}
          <Box style={{ margin: "2em 0" }} sx={PizzaListStyle.ProductHeading}>
            <Typography variant="h5">{"Latest Sauces"}</Typography>
          </Box>

          <Grid sx={PizzaListStyle.wrapper} container spacing={3}>
            {saucesArray.map(
              (saucesObj, i) => (
                console.log(saucesObj),
                (<SaucesCard key={i} saucesObj={saucesObj} />)
              )
            )}
            ;
          </Grid>
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
