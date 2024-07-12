import React from "react";
import Box from "@src/components/Box/";
import Text from "@src/components/Text/";
import Icon from "@src/components/Icon/";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box>
      <Image
        src="https://github.com/lucassmaniotto.png"
        alt="Lucas Smanioto"
        styleSheet={{ width: "128px", height: "128px", borderRadius: "100%" }}
      />
      <Link href="https://github.com/lucassmaniotto">
        <Icon name="github" />
      </Link>
      <Link href="https://twitter.com/alpiste_punk">
        <Icon name="twitter" />
      </Link>
      <Link href="https://instagram.com/licaaaaas">
        <Icon name="instagram" />
      </Link>
      <Text>Feed Header</Text>
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
