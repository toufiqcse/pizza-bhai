import { FeaturesStyle } from "@/styles/Features.style"
import { Box } from "@mui/material"
import Image from "next/image"
import { useState } from "react";

const Fetaures = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];

    const handleArrow = (direction) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }


    return (
        <Box sx={FeaturesStyle.container}>
            <Box style={{ left: 0 }} sx={FeaturesStyle.arrowContainer} onClick={() => handleArrow("l")}>
                <Image
                    src="/img/arrowl.png"
                    alt="arrow left"
                    layout="fill"
                    objectFit="contain"

                />
            </Box>
            <Box sx={FeaturesStyle.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
                {images.map((img, i) => (
                    <Box sx={FeaturesStyle.imgContainer} key={i}>
                        <Image
                            src={img}
                            alt="bannerImg"
                            layout="fill"
                            objectFit="contain"
                        />
                    </Box>
                ))}
            </Box>
            <Box sx={FeaturesStyle.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow('r')}>
                <Image
                    src='/img/arrowr.png'
                    alt="rightArrow"
                    layout="fill"
                    objectFit="contain"
                />
            </Box>

        </Box>
    )
}

export default Fetaures