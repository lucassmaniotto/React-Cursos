import { Box } from "@src/components/Box";
import theme from "@src/theme/theme";
export default function Home() {
  return (
    <Box
      tag="main"
      $styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          xs: "red",
          sm: "yellow",
          md: "blue",
        },
      }}
    >
      Oi
    </Box>
  );
}
