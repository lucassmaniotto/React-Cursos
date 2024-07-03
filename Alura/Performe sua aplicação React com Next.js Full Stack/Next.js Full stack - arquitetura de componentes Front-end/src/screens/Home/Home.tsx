import Box from "@src/components/Box";
import Text from "@src/components/Text";

import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";

export default function Home() {
  return (
    <Box
      tag="main"
      styleSheet={{
        flex: 1,
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h1" variant="heading1">Últimas Atualizações</Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  );
}
