import nookies from "nookies";
import { HttpClient } from "../../src/infra/HttpClient/HttpClient";

const REFRESH_TOKEN_NAME = "REFRESH_TOKEN_NAME";

const controllers = {
  async storeRefreshToken(req, res) {
    const context = { req, res };

    nookies.set(context, REFRESH_TOKEN_NAME, req.body.refresh_token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.json({
      data: {
        message: "Refresh token guardado com sucesso",
      },
    });
  },

  async displayCookies(req, res) {
    const context = { req, res };

    res.json({
      data: {
        cookies: nookies.get(context),
      },
    });
  },

  async regenerateTokens(req, res) {
    const context = { req, res };
    const cookies = nookies.get(context);
    const refreshToken = cookies[REFRESH_TOKEN_NAME];

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
      nookies.set(context, REFRESH_TOKEN_NAME, refreshResponse.refresh_token, {
        httpOnly: true,
        sameSite: "lax",
      });

      tokenService.save(refreshResponse.body.data.refresh_token, context)

      res.json({
        refreshResponse,
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
  // GET: controllers.displayCookies,
};

export default function handler(req, res) {
  if (controllerBy[req.method]) return controllerBy[req.method](req, res);

  res.status(404).json({
    status: 404,
    message: "Not Found",
  });
}
