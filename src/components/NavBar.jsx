import "./Navbar.css"
import '@fontsource/roboto/300.css'
import '@fontsource/geist-sans';
import { Typography, Box, useTheme, List, ListItem, ListItemIcon, CircularProgress } from "@mui/material";


function NavBar() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "auto",
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                zIndex: "5",
                backgroundColor: "white",
                padding: "1rem",
            }}
        >
            <Typography sx={{ 
                color: "black",
                fontFamily: 'Geist Sans',
                fontWeight: "500",
                fontSize: "1.125rem"
                }}>
                    Pablo Galindo
            </Typography>
            <Typography sx={{
                color: "black",
                fontFamily: 'Geist Sans',
                fontWeight: "500",
                fontSize: "1.125rem"
                }}>
                    About
                </Typography>
        </Box>
    );
}

export default NavBar
