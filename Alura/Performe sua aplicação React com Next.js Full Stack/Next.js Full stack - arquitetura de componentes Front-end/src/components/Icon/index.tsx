import BaseComponent from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from "./svg/_index";

const iconSizes = {
  xs: "12px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xl: "36px",
} as const;

interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}

const Icon: React.FC<IconProps> = ({
  size = "md",
  name = "default_icon",
  ...rest
}) => {
  const CurrentIcon = icons[name];
  if (!CurrentIcon) return <>"${name}" is not valid icon name.</>;
  return (
    <BaseComponent
      as="svg"
      $styleSheet={{
        width: iconSizes[size],
        height: iconSizes[size],
      }}
      color="black"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <CurrentIcon />
    </BaseComponent>
  );
};

export default Icon;
