import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Nav = () => {
  return (
    <Box
      as="nav"
      sx={{
        width: "100%",
        bg: "#373B53",
        height: "72px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading variant="h1" color="white">
        Invoice App
      </Heading>
    </Box>
  );
};

export default Nav;
