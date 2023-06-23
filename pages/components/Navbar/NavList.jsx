import { NavStyle } from "@/styles/Navbar.styles"
import { Box, Button, Typography } from "@mui/material"

const NavList = () => {
    return (
        <Box sx={NavStyle.list}>
            <Button>Home</Button>
            <Button>Product</Button>
            <Button>Menu</Button>
            <Button disabled>
                <Typography
                    sx={NavStyle.logo} style={{ textTransform: "capitalize" }}>
                    Pizza Bhai
                </Typography>
            </Button>
            <Button>Events</Button>
            <Button>Blog</Button>
            <Button>Contact</Button>
        </Box>
    )
}

export default NavList