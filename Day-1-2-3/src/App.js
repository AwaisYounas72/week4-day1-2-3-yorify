import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Hero from "./components/Hero/Hero";
import bg from "./assets/hero/Cover.png";
import Footer from "./components/Footer/Footer";
import NewsLetter from "./components/Newsletter/NewsLetter";
import Collaboration from "./components/Collaboration/Collaboration";
import Discount from "./components/Discount/Discount";
import Community from "./components/Community/Community";
import Collection from "./components/collection/Collection";
import Featured from "./components/Featured/Featured";
function App() {
  const colors = theme.palette;
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={"xl"}
        sx={{
          borderRadius: "0px",
          background: colors.secondary.main,
          padding: "0 !important",
        }}
      >
        <Navbar />
        <Hero />
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Discount />
        </Box>
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Featured />
        </Box>
        <Collection />
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Community />
        </Box>
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Discount />
        </Box>
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Collaboration />
        </Box>
        <Box
          sx={{ margin: "5rem 0" }}
          padding={{ xs: "1rem 1rem", md: "4rem 4.5rem" }}
        >
          <NewsLetter />
        </Box>
        <Box
          sx={{ margin: "5rem 0" }}
          padding={{ xs: "1rem 1rem", md: "4rem 4.5rem" }}
        >
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
