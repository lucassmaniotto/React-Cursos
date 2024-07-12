import Box from "@src/components/Box/";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon";
import Text from "@src/components/Text/";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu() {
  const theme = useTheme();
  const baseSize = "40px";
  return (
    <Box
      styleSheet={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "16px 20px",
        color: theme.colors.neutral.x000,
      }}
    >
      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          borderRadius: "100%",
          backgroundColor: theme.colors.primary.x500,
          alignItems: "center",
          justifyContent: "center",
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
        borderRadiusRipple="100%"
      >
        <Text>LS</Text>
      </Button.Base>

      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          borderRadius: "100%",
          backgroundColor: theme.colors.neutral.x500,
          alignItems: "center",
          justifyContent: "center",
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
        borderRadiusRipple="100%"
      >
        <Icon name="menu" />
      </Button.Base>
    </Box>
  );
}
