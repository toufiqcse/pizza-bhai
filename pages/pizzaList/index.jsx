import { PizzaListStyle } from "@/styles/PizzaList.styles";
import { Box, Typography } from "@mui/material";
import Card from "./pizzaCard";
import Link from "next/link";

const PizzaList = ({ pizzaData }) => {
    // console.log(pizzaData);
    return <>
        <Box sx={PizzaListStyle.container}>
            <Typography
                variant="h3"
                sx={PizzaListStyle.title}>
                {"THE BEST PIZZA IN TOWN"}
            </Typography>
            <Typography sx={PizzaListStyle.desc}>{"Pizza is a beloved and iconic dish that originated in Italy but has become popular worldwide"}
            </Typography>

            <Box sx={PizzaListStyle}>
                <Typography sx={PizzaListStyle.headerText}>Latest Pizza</Typography>
                <Link href='#' sx={PizzaListStyle.linkText}>See All</Link>
            </Box>
            <>
                {pizzaData.map((pizza, index) => {
                    const pizzaObject = pizza.pizza // extract from main array
                    return (
                        <Box key={index} sx={PizzaListStyle.wrapper}>
                            {
                                pizzaObject.map((pizzaObj, i) => (
                                    console.log(pizzaObj),

                                    <Card key={i} pizzaObj={pizzaObj} />


                                ))
                            }
                        </Box>
                    )
                })}
            </>
        </Box>




    </>
}

export const getServerSideProps = async (ctx) => {
    const res = await fetch("http://localhost:3000/api/pizza");
    const pizzaData = await res.json();
    return {
        props: {
            pizzaData
        }
    }
}

export default PizzaList

