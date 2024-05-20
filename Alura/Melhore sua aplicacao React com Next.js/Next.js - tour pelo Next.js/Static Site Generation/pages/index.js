import NextLink from "next/link";
import { Box, Text, Image } from "@skynexui/components";
import dados from "../dados.json";

function Post({ title, content, id }) {
  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        border: "1px solid #0075FF",
        padding: "16px",
        boxShadow: "1px 1px 5px 0 rgb(8, 69, 143)",
        transition: ".3s",
        borderRadius: "4px",
        hover: {
          boxShadow: "1px 1px 5px 5px rgb(188 233 255)",
        },
      }}
    >
      <NextLink href={`posts/${id}`} passHref>
        <Text
          tag="a"
          variant="heading4"
          styleSheet={{
            display: " block",
            color: "#041833",
            marginBottom: "8px",
          }}
        >
          {title}
        </Text>
      </NextLink>
      <Text>{content.substring(0, 140)}...</Text>
    </Box>
  );
}

export default function HomeScreen() {
  const infos = {
    nome: "Lucas Smaniotto",
    githubUser: "lucassmaniotto",
  };
  const posts = dados.posts;

  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "800px",
        paddingHorizontal: "16px",
        cursor: "pointer",
      }}
    >
      <a
        href={`https://github.com/${infos.githubUser}`}
        style={{ textAlign: "center" }}
      >
        <Image
          /* src={`https://github.com/${infos.githubUser}.png`} */
          src="/images/avatar.png"
          styleSheet={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            margin: "0 auto",
            border: "2px solid #0075FF",
          }}
        />
        <Text
          variant="heading1"
          tag="h1"
          styleSheet={{ color: "#041833", justifyContent: "center" }}
        >
          {infos.nome}
        </Text>
      </a>

      <Box
        styleSheet={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginTop: "16px",
          gridGap: "16px",
        }}
      >
        {posts.map(({ title, content, id }) => (
          <Post key={id} title={title} content={content} id={id} />
        ))}
      </Box>
    </Box>
  );
}
