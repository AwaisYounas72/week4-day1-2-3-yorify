import React from "react";
import { Box, Stack, Typography, ImageListItem } from "@mui/material";
import theme from "../../theme";
import SectionHeading from "../SectionHeading";
import FeaturedImage from "../../assets/Featured/featured.png";
import Logo from "../../assets/navbar/Logo.svg";
import Buttton from "../Button";

const Featured = () => {
  const colors = theme.palette;
  return (
    <Stack gap="2rem">
      <Stack gap="1rem" padding={{ xs: "0rem 2rem", md: "0rem 20rem" }}>
        <SectionHeading text="Featured" />
        <Typography
          fontSize={{ xs: "2rem", md: "3.4rem" }}
          fontWeight={700}
          textAlign={"center"}
          color={colors.text.white}
        >
          Hot Trending On This Week from Yorfy
        </Typography>
        <Typography
          fontSize={"20px"}
          fontWeight={400}
          textAlign={"center"}
          color={colors.text.disabled}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>

      {/* image box*/}

      <Stack
        direction="row"
        justifyContent={"space-evenly"}
        gap={"1rem"}
        flexWrap={"wrap"}
        borderRadius={"16px"}
        padding={{ xs: "1rem 2rem", md: "4rem 4rem" }}
        margin={{ xs: "1rem 1rem", md: "4rem 3.6rem" }}
        sx={{ background: colors.primary.dark }}
      >
        <Stack gap="2rem" alignItems={"center"} width={{ md: "15rem" }}>
          <ImageListItem sx={{ width: 50, height: 50 }}>
            <img src={Logo} alt="Yorfy-logo" />
          </ImageListItem>
          <Typography
            variant="h3"
            color={colors.text.white}
            textAlign={"center"}
          >
            YorEyes #234
          </Typography>
          <Typography
            fontSize={"16px"}
            color={colors.text.disabled}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Stack>

        <Box width={{ xs: "10rem", sm: "15rem", md: "21rem" }}>
          <img
            src={FeaturedImage}
            alt="centerImage"
            width={"100%"}
            style={{ boxShadow: "0px 24px 80px 0px rgba(0, 0, 0, 0.80)" }}
          />
        </Box>

        <Stack gap="2rem" alignItems={"center"} width={{ md: "15rem" }}>
          <Typography
            variant="h3"
            color={colors.text.white}
            textAlign={"center"}
          >
            Interesting with This Item?
          </Typography>
          <Typography
            fontSize={"16px"}
            color={colors.text.disabled}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Buttton text="Buy On Open Sea" bg={colors.primary.main} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Featured;
