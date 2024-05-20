import NextLink from "next/link";
import { Box, Text } from "@skynexui/components";
import { useRouter } from "next/router";
//import dados from "../../dados.json";

export async function getStaticPaths() {
  return {
    paths: [], 
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const id = context.params.id
  const post = await fetch(`http://localhost:3000/api/posts/${id}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
    }
  );

  return {
    props: {
      id: post.id,
      video: post.video,
      title: post.title,
      content: post.content,
      date: post.date,
    },
    revalidate: 10,
  };
}

export default function PostByIdScreen(props) {
  const router = useRouter();
  const post = {
    title: props.title,
    date: props.date,
    content: props.content,
  };

  if (router.isFallback) {
    return "Essa página não existe ainda!";
  }

  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "700px",
        paddingHorizontal: "16px",
      }}
    >
      {/* Cabeçalho */}
      <Text
        variant="heading2"
        tag="h1"
        styleSheet={{
          color: "#041833",
          justifyContent: "center",
          lineHeight: "1.2",
        }}
      >
        {post.title}
      </Text>
      <Text
        styleSheet={{
          color: "#041833",
          justifyContent: "center",
          borderBottom: "1px solid #0075FF",
          paddingVertical: "16px",
          marginVertical: "16px",
        }}
      >
        {post.date}
      </Text>

      {/* Área de Conteudo */}
      <Box
        styleSheet={{
          flexDirection: "column",
        }}
      >
        <Text>{post.content}</Text>

        {post.video && (
          <iframe
            style={{ marginTop: "32px", minHeight: "400px" }}
            src={post.video}
          />
        )}
      </Box>

      {/* Rodapé */}
      <Box
        styleSheet={{
          marginTop: "16px",
          paddingVertical: "16px",
          borderTop: "1px solid #0075FF",
          color: "#041833",
        }}
      >
        <NextLink href="/" passHref>
          <Text
            tag="a"
            styleSheet={{
              hover: {
                textDecoration: "underline",
                cursor: "pointer",
                color: "#0075FF",
              },
            }}
          >
            Voltar para a home
          </Text>
        </NextLink>
      </Box>
    </Box>
  );
}
