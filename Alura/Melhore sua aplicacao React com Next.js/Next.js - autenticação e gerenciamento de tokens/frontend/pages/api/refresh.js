import nookies from "nookies";
import { HttpClient } from "../../src/infra/HttpClient/HttpClient";
import { tokenService } from "../../src/services/auth/tokenService";

const REFRESH_TOKEN_NAME = "REFRESH_TOKEN_NAME";

const controllers = {
  async storeRefreshToken(req, res) {
    const ctx = { req, res };

    nookies.set(ctx, REFRESH_TOKEN_NAME, req.body.refresh_token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    res.json({
      data: {
        refresh_token: req.body.refresh_token,
      },
    });
  },

/*   async displayCookies(req, res) {
    const ctx = { req, res };

    res.json({
      data: {
        cookies: nookies.get(ctx),
      },
    });
  }, */

  async regenerateTokens(req, res) {
    const ctx = { req, res };
    const cookies = nookies.get(ctx);
    const refreshToken = cookies[REFRESH_TOKEN_NAME] || req.body.refresh_token;

    const refreshResponse = await HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/refresh`,
      {
        method: "POST",
        body: {
          refresh_token: refreshToken,
        },
      }
    );

    if (refreshResponse.ok) {
      const { access_token, refresh_token } = refreshResponse.body.data;

      nookies.set(ctx, REFRESH_TOKEN_NAME, refresh_token, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });

      tokenService.save(access_token, ctx);

      res.status(200).json({
        data: refreshResponse.body.data,
      });
    } else {
      res.status(401).json({
        status: 401,
        message: "Unauthorized",
      });
    }
  },
};

const controllerBy = {
  POST: controllers.storeRefreshToken,
  GET: controllers.regenerateTokens,
  PUT: controllers.regenerateTokens,
  DELETE: (req, res) => {
    const ctx = { req, res };
    nookies.destroy(ctx, REFRESH_TOKEN_NAME, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    res.json({
      data: {
        message: "Refresh Token deletado com sucesso",
      },
    });
  },
  // GET: controllers.displayCookies,
};

export default function handler(req, res) {
  if (controllerBy[req.method]) return controllerBy[req.method](req, res);

  res.status(404).json({
    status: 404,
    message: "Not Found",
  });
}
