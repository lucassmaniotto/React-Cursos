import React from "react";
import Box from "@src/components/Box/";
import Text from "@src/components/Text/";
import Icon from "@src/components/Icon/";

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
      <Icon name="github" size="xl" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="linkedin" />
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
