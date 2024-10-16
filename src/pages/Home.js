import React from "react";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#000", // Dark background for better contrast
      }}
    >
      <Typography variant="h2" component="h1" sx={{ marginBottom: "1rem" }}>
        Victor Paul Buddha
      </Typography>
      <Typography variant="h5" component="h2">
        Welcome to my personal website
      </Typography>
    </Box>
  );
}

export default Home;
