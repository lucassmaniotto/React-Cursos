import React from "react";
import Box from "@src/components/Box/";
import Text from "@src/components/Text/";
import Icon from "@src/components/Icon/";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        width: "100%",
        maxWidth: "683px",
        backgroundColor: theme.colors.neutral.x000,
        marginTop: "-228px",
        borderRadius: "8px",
        padding: "32px 40px",
      }}
    >
      {" "}
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: "24px",
      }}
    >
      <Box
        styleSheet={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Button.Base
          href="https://github.com/lucassmaniotto"
          styleSheet={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src="https://github.com/lucassmaniotto.png"
            alt="Lucas Smaniotto"
            styleSheet={{
              width: { xs: "100px", md: "128px" },
              height: { xs: "100px", md: "128px" },
              borderRadius: "100%",
            }}
          />
          <Text tag="h1" variant="heading4">
            Lucas Smanioto
          </Text>
        </Button.Base>
        <Box
          styleSheet={{
            justifyContent: "space-between",
          }}
        >
          <Box
            styleSheet={{
              display: { xs: "none", md: "flex" }, gap: "16px",
            }}
          >
            <Button fullWidth={true} colorVariant="primary" size="xl" href="/">
              Newsletter
            </Button>
            <Button fullWidth={true} colorVariant="neutral" size="xl" href="/">
              Buy me a coffee
            </Button>
          </Box>
          <Box
            styleSheet={{
              display: { xs: "flex", md: "none" }, gap: "16px",
            }}
          >
            <Button fullWidth={true} colorVariant="primary" size="xs" href="/">
              Newsletter
            </Button>
            <Button fullWidth={true} colorVariant="neutral" size="xs" href="/">
              Buy me a coffee
            </Button>
          </Box>
        </Box>
        {/* <Link href="https://github.com/lucassmaniotto">
          <Icon name="github" />
        </Link>
        <Link href="https://twitter.com/alpiste_punk">
          <Icon name="twitter" />
        </Link>
        <Link href="https://instagram.com/licaaaaas">
          <Icon name="instagram" />
        </Link> */}
      </Box>
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
};
