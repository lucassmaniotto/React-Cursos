import { authService } from "./authService";

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

  export { withSession };