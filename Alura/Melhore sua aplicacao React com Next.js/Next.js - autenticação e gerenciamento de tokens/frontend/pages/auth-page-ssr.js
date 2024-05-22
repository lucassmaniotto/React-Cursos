import nookies from "nookies";
import { tokenService } from "../src/services/auth/tokenService";

function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth Page Static</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export default AuthPageSSR;

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  console.log("cookies", cookies);

  return {
    props: {
      token: tokenService.get(context),
    },
  };
}
