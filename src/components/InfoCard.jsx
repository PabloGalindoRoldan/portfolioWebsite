import '@fontsource/roboto/300.css'
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-sans/500.css';
import { Typography, Box, useTheme, List, ListItem, ListItemIcon, CircularProgress, Card } from "@mui/material";


function InfoCard({ titulo, descripcion, fecha }) {
    return (
        <>
            <Typography sx={{
                color: "black",
                height: "3vh",
                fontSize: "1.125rem",
                fontWeight: "500",
                fontFamily: "Geist Sans",
                textDecoration: "none",
                textAlign: "left"
            }}>
                {titulo}
            </Typography>
            <Typography sx={{
                color: "#666666",
                height: "3vh",
                fontSize: "1rem",
                fontWeight: "400",
                fontFamily: "Geist Sans",
                textDecoration: "none",
                letterSpacing: "0.7px",
                textAlign: "left"
            }}>
                {descripcion}
            </Typography>
            <Typography sx={{
                color: "#666666",
                height: "3vh",
                marginBottom: "5vh",
                fontSize: "1rem",
                fontWeight: 400,
                fontFamily: "Geist Sans",
                textDecoration: "none",
                letterSpacing: "0.7px",
                textAlign: "left",
            }}>
                {fecha}
            </Typography>
        </>
    );
}

export default InfoCard
