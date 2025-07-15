import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine the current path
    const currentPath = location.pathname;

    // Determine the target path and label based on the current path
    const targetPath = currentPath === "/about" ? "/" : "/about";
    const targetLabel = currentPath === "/about" ? "Work" : "About";

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
            <Typography
                sx={{
                    color: "black",
                    fontFamily: 'Geist Sans',
                    fontWeight: "500",
                    fontSize: "1.125rem",
                    cursor: "pointer"
                }}
                onClick={() => navigate("/")}
            >
                Pablo Galindo
            </Typography>
            <Typography
                sx={{
                    color: "black",
                    fontFamily: 'Geist Sans',
                    fontWeight: "500",
                    fontSize: "1.125rem",
                    cursor: "pointer"
                }}
                onClick={() => navigate(targetPath)}
            >
                {targetLabel}
            </Typography>
        </Box>
    );
}

export default NavBar;