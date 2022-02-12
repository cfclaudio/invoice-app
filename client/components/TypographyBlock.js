import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const TypographyBlock = () => {
  return (
    <div>
      <Heading as="h1" variant={"h1"}>
        H1 Heading
      </Heading>
      <Heading as="h2" variant={"h2"}>
        H2 Heading
      </Heading>
      <Heading as="h3" variant={"h3"}>
        H3 Heading
      </Heading>
      <Heading as="h4" variant={"h4"}>
        H4 Heading
      </Heading>

      <Text as="p" textStyle="body1">
        Body 1
      </Text>
      <Text as="p" textStyle="body2">
        Body 2
      </Text>
    </div>
  );
};

export default TypographyBlock;
