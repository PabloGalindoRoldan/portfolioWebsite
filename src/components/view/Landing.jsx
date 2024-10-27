import "./Landing.css";
import '@fontsource/roboto/300.css';
import '@fontsource/geist-sans';
import { Typography, Box, useTheme, List, ListItem, ListItemIcon, CircularProgress } from "@mui/material";
import NavBar from "../NavBar";
import ImageCard from "../ImageCard";

function Landing() {
    return (
        //Contenedor
        <Box sx={{ width: "100%" }}>
            <NavBar />
            {/* Seccion 1 */}
            <Box sx={{ padding: "1rem" }}>
                <Typography sx={{
                    marginTop: "10vh",
                    fontFamily: "Geist Sans",
                    fontWeight: "800",
                    color: "#111111",
                    fontSize: "2.2rem",
                    textAlign: "left",
                    lineHeight: "130%"
                }}>
                    Product Design. Interfaces. Systems. Strategy. Ux. & More
                </Typography>
            </Box>
            {/* seccion 2 */}
            <Box>
                <ImageCard 
                    titulo="Ubuntu" 
                    descripcion="Investment Web App" 
                    source="https://res.cloudinary.com/dmfujelmt/image/upload/v1729867522/cld-sample-5.jpg"
                />
            </Box>
            <Box>
                <ImageCard
                    titulo="titulo" 
                    descripcion="descripcion" 
                    source="https://res.cloudinary.com/dmfujelmt/image/upload/v1729867522/cld-sample-5.jpg"
                />
            </Box>
            <Box>
                <ImageCard
                    titulo="titulo" 
                    descripcion="descripcion" 
                    source="https://res.cloudinary.com/dmfujelmt/image/upload/v1729867522/cld-sample-5.jpg"
                />
            </Box>
            {/* seccion 3 */}

            <Box sx={{marginTop: "10vh", padding: "1rem"}}>
                <Typography sx={{textAlign: "left"}}>
                    I'm Pablo, a spanish/argentinian developer based in Argentina with over 2 years of diverse experience in front end development and a 12 year background in law and social sciences. I specialize in crafting compelling and high quallity web products. My passion lies in creating products to be used by massive amount of people and tackling diverse challenges in the development field.
                </Typography>
                <Typography>
                    more about me
                </Typography>
            </Box>
            {/* seccion 4 */}
            <Box>
                <Typography>
                    Get in touch
                </Typography>
                <Typography>
                    pablogalindo90@gmail.com
                </Typography>
            </Box>
            <Box>
                Footer
            </Box>
        </Box>
    )
}

export default Landing
