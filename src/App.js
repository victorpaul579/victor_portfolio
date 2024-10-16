import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Box, Typography  } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e1e1e",
    },
    secondary: {
      main: "#bb86fc",
    },
  },
});

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" sx={{ backgroundColor: "#121212" }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit" onClick={() => scrollToSection("home")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("about")}>
              About
            </Button>
            <Button
              color="inherit"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ marginTop: "80px" }}>
          <Box id="home">
            <Home />
          </Box>
          <Box id="about">
            <About />
          </Box>
          <Box id="experience">
            <Experience />
          </Box>
          <Box id="projects">
            <Projects />
          </Box>
          <Box id="contact">
            <Contact />
          </Box>
        </Container>
        <footer className="footer">
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0",
            }}
          >
            <Typography variant="body1" sx={{ color: "#fff" }}>
              &copy; 2024 Victor Paul Buddha
            </Typography>
          </Container>
        </footer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
