import '@fontsource/geist-sans/400.css';
import { Typography, Box, useTheme, List, ListItem, ListItemIcon, CircularProgress } from "@mui/material";

function Footer() {
    return (
        <Box>
        <Typography sx={{
            padding: "1rem",
            textAlign: "left",
            fontWeight: "400",
            fontSize: "0.875rem",
            color: "#888888"
        }}>
            © Pablo Galindo 2024
        </Typography>
        </Box>
    )
}

export default Footer
