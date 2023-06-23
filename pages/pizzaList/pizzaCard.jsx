import { PizzaCardStyle } from "@/styles/PizzaCard.styles"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const Card = ({ pizzaObj }) => {
    const { name, image, price } = pizzaObj
    return (
        <Box sx={PizzaCardStyle.container} style={{ cursor: "pointer" }}>

            <Link href="/">
                <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={150}


                />
            </Link>
            <Typography
                sx={PizzaCardStyle.title}>
                {name}
            </Typography>
            <span
                style={PizzaCardStyle.price}>
                $ {price}
            </span>

            <Typography
                sx={PizzaCardStyle.desc}>
                {"Lorem ipsum dolor "}
            </Typography>

        </Box>
    )
}

export default Card