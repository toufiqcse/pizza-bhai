import { PizzaCardStyle } from "@/styles/PizzaCard.styles"
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent, Grid } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const SaucesCard = ({ saucesObj }) => {
    const { name, image, price, description } = saucesObj;
    const [showFullDesc, setShowFullDesc] = useState(false);
    const toggleDesc = () => {
        setShowFullDesc(!showFullDesc)
    }
    return (
        <Grid item xs={12} sm={4} md={3} lg={2.4} xl={2}>
            <Card sx={{ maxWidth: 250 }} style={{ cursor: "pointer" }}>

                <CardActionArea>
                    <CardMedia
                        component='img'
                        image={image}
                        height={150}
                    />

                    <CardContent>
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
                            {showFullDesc ? description : description.slice(0, 10) + "..."}
                            {description.length > 10 && (
                                <Link style={PizzaCardStyle.linkText} href="#" onClick={toggleDesc}>
                                    {showFullDesc ? " see less" : " see more"}
                                </Link>
                            )}
                        </Typography>
                    </CardContent>

                </CardActionArea>

            </Card>
        </Grid>
    )
}

export default SaucesCard;
