import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { authService } from "./authService";

// Para Server Side Rendering
function withSession(func) {
  return async (context) => {
    try {
      const session = await authService.getSession(context);
      const modifiedContext = {
        ...context,
        request: {
          ...context.request,
          session,
        },
      };

      return func(modifiedContext);
    } catch (error) {
      return {
        redirect: {
          destination: "/?error=401",
          permanent: false,
        },
      };
    }
  };
}

// Para Client Side Rendering
function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authService
      .getSession()
      .then((useSession) => {
        setSession(useSession);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data: { session },
    error,
    loading,
  };
}

function withSessionHOC(Component) {
  return function Wrapper(props) {
    const session = useSession();
    const router = useRouter();

    if (!session.loading && session.error) {
      router.push("/?error=401");
    }
    const modifiedProps = {
      ...props,
      session: session.data.session,
    };
    return <Component {...modifiedProps} />;
  };
}

export { withSession, withSessionHOC, useSession };
