import React, { useState } from "react";
import "./Landing.css";
import '@fontsource/roboto/300.css';
import '@fontsource/geist-sans/300.css';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/600.css';
import { Typography, Box } from "@mui/material";
import NavBar from "../NavBar";
import ImageCard from "../ImageCard";
import Footer from "../Footer";

function Landing() {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText("pablogalindo90@gmail.com").then(() => {
            setEmailCopied(true);
            setTimeout(() => {
                setEmailCopied(false);
            }, 2000);
        });
    };

    return (
        <Box sx={{
            width: "100%",
            fontFamily: "Geist Sans",
        }}>
            <NavBar />

            {/* Seccion 1 */}
            <Box sx={{ padding: "1rem" }}>
                <Typography sx={{
                    marginTop: "10vh",
                    fontFamily: "Geist Sans",
                    fontWeight: 600,
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

            <Box sx={{marginTop: "20vh", padding: "1rem"}}>
                <Typography sx={{
                    textAlign: "left",
                    fontWeight: 400,
                    fontSize: "1.125rem",
                    lineHeight: "160%"
                }}>
                    I'm Pablo, a spanish/argentinian developer based in Argentina with over 2 years of diverse experience in front end development and a 12 year background in law and social sciences. I specialize in crafting compelling and high quallity web products. My passion lies in creating products to be used by massive amount of people and tackling diverse challenges in the development field.
                </Typography>
                <Typography sx={{
                    textAlign: "left",
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    paddingTop: "20px",
                    lineHeight: "160%"
                }}>
                    More about me
                </Typography>
            </Box>

            {/* seccion 4 */}
            <Box sx={{
                marginBottom: "20vh",
                marginTop: "15vh",
                padding: "1rem",
            }}>
                <Typography sx={{
                    textAlign: "left",
                    fontWeight: 400,
                    fontSize: "1.125rem",
                    paddingTop: "20px",
                    lineHeight: "160%",
                    color: "#333333"
                }}>
                    Get in touch
                    <span className="seccion4_clickToCopy"> (Click to copy)</span>
                </Typography>
                <Typography
                    sx={{
                        fontSize: "6vw",
                        textAlign: "left",
                        fontWeight: "600",
                        cursor: "pointer",
                        color: emailCopied ? "green" : "inherit"
                    }}
                    onClick={handleEmailClick}
                >
                    {emailCopied ? "Email copied to clipboard" : "pablogalindo90@gmail.com"}
                </Typography>
            </Box>

            {/* footer */}
            <Footer/>
        </Box>
    );
}

export default Landing;