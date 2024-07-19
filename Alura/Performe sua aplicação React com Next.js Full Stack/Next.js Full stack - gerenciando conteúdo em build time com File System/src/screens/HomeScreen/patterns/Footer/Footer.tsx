
import Box from "@src/components/Box/Box";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        width: "100%",
        height: "120px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.neutral.x999,
        color: theme.colors.neutral.x000,
        padding: "24px",
        position: "relative",
        marginTop: "auto",
      }}
    >
      <Text
        styleSheet={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          flexWrap: "wrap",
          textAlign: "center",
        }}
        variant="body2"
      >
        Feito por{" "}
        <Link href="https://hello-world-lucassmaniotto.vercel.app">
          mim mesmo😃
        </Link>{" "}
        no curso de Next da{" "}
        <Link href="https://cursos.alura.com.br/course/nextjs-fullstack-arquitetura-componentes-front-end">
          Alura
        </Link>{" "}
         com{" "}
        <Link href="https://github.com/omariosouto">
          Mario Souto (DevSoutinho)
        </Link>.
      </Text>
    </Box>
  );
}
