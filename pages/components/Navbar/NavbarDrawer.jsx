import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

// data for nav menu
const data = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Products", icon: <StoreIcon /> },
    { name: "Menu", icon: <WidgetsIcon /> },
    { name: "Events", icon: <EventIcon /> },
    { name: "Blog", icon: <ArticleIcon /> },
    { name: "Contact", icon: <ContactPageIcon /> },
];


const NavbarDrawer = ({ open, setOpen }) => {

    return (
        <Drawer open={open} anchor={'left'} onClose={() => setOpen(false)}>
            <Box style={{ width: 200 }} onClick={() => setOpen(false)}>
                <Typography
                    variant="h5"
                    sx={{ py: ".5em", textAlign: "center", fontWeight: "600" }}>
                    Pizza Bhai
                </Typography>
                <Divider />
                <List>
                    {data.map((item, index) => (
                        <ListItemButton key={index}>
                            <ListItemIcon> {item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default NavbarDrawer