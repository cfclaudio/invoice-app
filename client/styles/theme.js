import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import {
  fonts,
  fontWeights,
  textStyles,
  lineHeights,
  Heading,
} from "./typography";

console.log("chakraTheme", chakraTheme);

const theme = extendTheme({
  fonts,
  fontWeights,
  lineHeights,
  textStyles,
  components: {
    Heading,
  },
});

export default theme;
