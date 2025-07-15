import React, { useState, useEffect } from "react";
import "./About.css";
import '@fontsource/roboto/300.css';
import '@fontsource/geist-sans/300.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/600.css';
import { Typography, Box, Link } from "@mui/material";
import NavBar from "../NavBar";
import InfoCard from "../InfoCard";
import Footer from "../Footer";

function About() {
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
            width: "auto",
            fontFamily: "Geist Sans",
            padding: "2vh",
        }}>
            <NavBar />

            {/* seccion 1 */}
            <Typography sx={{
                marginTop: "18vh",
                fontFamily: "Geist Sans",
                fontSize: "2rem",
                textAlign: "left",
                lineHeight: "120%",
                fontWeight: "500",
            }}>
                Front-End Developer | React JavaScript & Modern Web Technologies
            </Typography>

            {/* seccion 2 */}
            <Typography sx={{
                marginTop: "4vh",
                fontFamily: "Geist Sans",
                fontWeight: "300",
                textAlign: "left",
                lineHeight: "170%",
                marginBottom: "20px",
                fontSize: "1.125rem",
                color: "#333333",
            }}>
                I'm Pablo, a passionate web developer and associate lawyer with a solid background in the legal field. I've combined over 11 years of experience in law with a growing passion for programming and software development.
            </Typography>

            <Typography sx={{
                marginTop: "2vh",
                fontFamily: "Geist Sans",
                fontWeight: "300",
                textAlign: "left",
                lineHeight: "170%",
                marginBottom: "20px",
                fontSize: "1.125rem",
                color: "#333333",
            }}>
                Since 2022, I've been deeply engaged in programming, focusing on front-end web development with technologies such as HTML, CSS, JavaScript, and React. I've successfully worked on both personal and collaborative projects, excelling in crafting attractive and functional user interfaces. Recently, I developed a web application using Java, Spring Boot, and React, designed to connect investors with small businesses dedicated to environmental sustainability. Currently, I'm expanding my expertise by studying back-end technologies to further enhance my skill set.
            </Typography>

            <Typography sx={{
                marginTop: "2vh",
                fontFamily: "Geist Sans",
                fontWeight: "300",
                textAlign: "left",
                lineHeight: "170%",
                marginBottom: "20px",
                fontSize: "1.125rem",
                color: "#333333",
            }}>
                I'm a quick learner with an analytical mind and high emotional intelligence.
                My experience in leadership and teamwork, combined with my creativity and aesthetic sense, allows me to effectively tackle technical projects.
                Clear and effective communication is one of my key skills.
            </Typography>

            <Box sx={{
                width: "100%",
                height: "50vh",
                backgroundImage: `url('../../src/assets/portfolioImg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginTop: "10vh",
                marginBottom: "10vh",
                fontFamily: "Geist Sans",
            }}>
            </Box>
            {/* seccion 3 */}
            <Box sx={{
                fontFamily: "Geist Sans",
            }}>
                <Typography sx={{
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    marginBottom: "3vh",
                    fontFamily: "Geist Sans",
                }}>
                    Work Experiences
                </Typography>

                <InfoCard
                    titulo={"AI Training"}
                    descripcion={"@outlier / freelance"}
                    fecha={"10/24 - today"}
                />
                <InfoCard
                    titulo={"Software Developer"}
                    descripcion={"@semillero Latam"}
                    fecha={"06/24 - 10/24"}
                />
                <InfoCard
                    titulo={"Private Attourney"}
                    descripcion={"@Estudio Galindo - Augugliaro - Hermida"}
                    fecha={"08/15-03/24"}
                />
                <InfoCard
                    titulo={"Legal Assistant"}
                    descripcion={"@Ministerio Publico de la Nación Argentina"}
                    fecha={"01/12-07/15"}
                />
                <InfoCard
                    titulo={"Data Analyst"}
                    descripcion={"@RENAPER"}
                    fecha={"01/10-12/10"}
                />

                <Typography sx={{
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    marginBottom: "3vh",
                    fontFamily: "Geist Sans",
                }}>
                    Education
                </Typography>
                <InfoCard
                    titulo={"Degree in Computer Systems"}
                    descripcion={"Universidad Nacional de Rio Negro"}
                    fecha={"01/24 - today"}
                />
                <InfoCard
                    titulo={"CS50"}
                    descripcion={"EdX - Harvard University"}
                    fecha={"07/23-12/23"}
                />
                <InfoCard
                    titulo={"Degree in Law"}
                    descripcion={"Universidad de Buenos Aires"}
                    fecha={"01/08-07/13"}
                />

                <Typography sx={{
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    marginBottom: "3vh",
                    fontFamily: "Geist Sans",
                }}>
                    Contact
                </Typography>
                <Typography sx={{
                    fontWeight: "300",
                    fontSize: "1.125rem",
                    textAlign: "left",
                    marginBottom: "3vh",
                    fontFamily: "Geist Sans",
                }}>
                    I'm open to connecting with other professionals and exploring new opportunities! Feel free to reach out if you'd like to collaborate or chat about web development, law, or any other interesting topic.
                </Typography>

                <Typography
                    sx={{
                        fontWeight: "300",
                        fontSize: "1.125rem",
                        textAlign: "left",
                        fontFamily: "Geist Sans",
                        cursor: "pointer",
                        color: emailCopied ? "green" : "inherit"
                    }}
                    onClick={handleEmailClick}
                >
                    {emailCopied ? "Email copied to clipboard" : "pablogalindo90@gmail.com"}
                </Typography>

                <Typography sx={{
                    fontWeight: "300",
                    fontSize: "1.125rem",
                    textAlign: "left",
                    marginBottom: "3vh",
                    fontFamily: "Geist Sans",
                }}>
                    <Link
                        href="https://www.linkedin.com/in/pablogalindoroldan"
                        underline="none"
                        color="inherit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Linkedin
                    </Link>
                </Typography>
            </Box>

            {/* footer */}
            <Footer />

            {/* fin contenedor */}
            
        </Box>
    );
}

export default About;