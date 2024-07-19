import { withTemplateConfig } from '@src/services/template/withTemplateConfig';

export { default } from '@src/screens/HomeScreen/HomeScreen';

export async function getStaticProps() {
  return {
    props: await withTemplateConfig({}),
  };  
}

// import Box from "@src/components/Box";
// import theme from "@src/theme/theme";
// export default function HomeScreen() {
//   return (
//     <Box
//       tag="main"
//       styleSheet={{
//         fontFamily: theme.typography.fontFamily,
//         backgroundColor: {
//           xs: 'red',
//           sm: 'yellow',
//           md: 'blue',
//         }
//       }}
//     >
//       Oi
//     </Box>
//   )
// }
