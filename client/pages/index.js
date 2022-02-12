import Head from "next/head";
import { TypographyBlock, Nav } from "../components";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDir: "column" }}>
      <Head>
        <title>Invoice App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Box as="main">
        <TypographyBlock />
      </Box>
    </Box>
  );
}
