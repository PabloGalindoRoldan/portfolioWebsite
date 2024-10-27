import '@fontsource/roboto/300.css'
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/600.css';
import { Typography, Box, useTheme, List, ListItem, ListItemIcon, CircularProgress, Card } from "@mui/material";


function ImageCard({ titulo, descripcion, source }) {
    return (
        <>
            <Card sx={{
                height: "70vh",
                borderRadius: "15px",
                margin: "1rem",
                marginBottom: "2vh"
            }}>
                <img
                    src={source}
                    alt="sample"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                />
            </Card>
            <Typography sx={{
                color: "black",
                height: "3vh",
                fontSize: "1.125rem",
                fontWeight: 600,
                fontFamily: "Geist Sans",
                textDecoration: "none"
            }}>
                {titulo}
            </Typography>
            <Typography sx={{
                color: "#666666",
                height: "3vh",
                marginBottom: "5vh",
                fontSize: "1rem",
                fontWeight: 400,
                fontFamily: "Geist Sans",
                textDecoration: "none",
                letterSpacing: "0.7px"
            }}>
                {descripcion}
            </Typography>
        </>
    );
}

export default ImageCard
