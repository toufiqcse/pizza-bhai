import { NavStyle } from "@/styles/Navbar.styles.js";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import NavList from "./NavList";
import NavbarDrawer from "./NavbarDrawer";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavbarDrawer open={open} setOpen={setOpen} />
            <Box sx={NavStyle.container}>
                <Box display={"flex"} alignItems={"center"}>
                    <IconButton sx={NavStyle.MenuIcon} onClick={() => setOpen(true)}>
                        <MenuIcon sx={NavStyle.icon} />
                    </IconButton>
                    <Box sx={NavStyle.callButton}>
                        <IconButton>
                            <Image
                                src="/img/telephone.png"
                                alt="callButton"
                                width="32"
                                height="32"
                            />
                        </IconButton>
                    </Box>
                    <Box sx={NavStyle.texts}>
                        <Typography>ORDER NOW !</Typography>
                        <Box>01893 976533</Box>
                    </Box>
                </Box>

                <NavList />

                <Box>
                    <IconButton>
                        <Badge
                            badgeContent={3}
                            sx={{
                                "& .MuiBadge-badge": {
                                    color: "#d1411e",
                                    backgroundColor: "white",
                                },
                            }}
                        >
                            <ShoppingCartIcon
                                sx={{ fontSize: "1.8rem" }}
                                style={NavStyle.icon}
                            />
                        </Badge>
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default Navbar;