import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import LogoWithText from "../LogoWithText";
import theme from "../../theme";

const socialMedia = ["FB", "LG", "LI", "YT"];
const Footer = () => {
  const colors = theme.palette;
  return (
    <Stack gap={"2rem"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <LogoWithText text="YORFY" />
        <Stack direction={"row"} gap={"15px"}>
          {socialMedia.map((media) => {
            return (
              <Typography
                key={media}
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: colors.text.white,
                  textDecoration: "none",
                  borderRadius: "50%",
                  fontSize: "0.8rem",
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "1px solid white",
                }}
              >
                {media}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
      <hr style={{ border: `1px solid ${colors.primary.main}` }} />
      <Stack
        direction={{
          xs: "column", // For extra small screens, display in a column
          md: "row",
        }}
        justifyContent={"space-between"}
        color={colors.text.white}
      >
        <Typography>&copy; 2023 Yorfy Template. All Rights Reserved</Typography>
       
        <Typography>Made with Love Growweb Studio</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
