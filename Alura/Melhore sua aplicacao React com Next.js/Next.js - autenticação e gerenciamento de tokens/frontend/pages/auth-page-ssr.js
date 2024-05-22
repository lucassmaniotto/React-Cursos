import { withSession } from "../src/services/auth/session";

function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth Page Static</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export default AuthPageSSR;

// Decorator Pattern
export const getServerSideProps = withSession(async (context) => {
  return {
    props: {
      session: context.request.session,
    },
  };
});

