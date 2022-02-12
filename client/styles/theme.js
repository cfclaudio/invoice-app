import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import {
  fonts,
  fontWeights,
  textStyles,
  lineHeights,
  Heading,
} from "./typography";
import { colors } from "./colors";

console.log("chakraTheme", chakraTheme);

const theme = extendTheme({
  fonts,
  fontWeights,
  lineHeights,
  textStyles,
  colors,
  components: {
    Heading,
  },
});

export default theme;
