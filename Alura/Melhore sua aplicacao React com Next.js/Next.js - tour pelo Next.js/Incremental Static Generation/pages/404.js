import { Box, Text } from "@skynexui/components";
import NextLink from "next/link";

export default function Custom404() {
  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "700px",
        paddingHorizontal: "16px",
      }}
    >
      <Text
        variant="heading1"
        styleSheet={{ textAlign: "center", color: "#041833" }}
      >
        404
      </Text>
      <Text
        variant="heading2"
        styleSheet={{
          textAlign: "center",
          color: "#041833",
          marginVertical: "16px",
        }}
      >
        Página não encontrada
      </Text>
      <NextLink href="/" styleSheet={{ textAlign: "center" }}>
        <Text
          tag="a"
          styleSheet={{
            hover: {
              textDecoration: "underline",
              cursor: "pointer",
              color: "#041833"
            },
          }}
        >
          Voltar para a home
        </Text>
      </NextLink>
    </Box>
  );
}
