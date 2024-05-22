import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
  async login({ username, password }) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      body: { username, password },
    })
      .then(async (res) => {
        const body = res.body;
        if (!res.ok) throw new Error("Usuário ou senha inválidos");
        tokenService.save(body.data.access_token);
        return body;
      })
      .then(async ({ data }) => {
        const { refresh_token } = data;

        // O ideal seria ter um endpoint do backend para tratar o refresh token
        // Por exemplificação será utilizado o API Route do Next.js localizado em frontend/pages/api/refresh
        const response = await HttpClient("/api/refresh", {
          method: "POST",
          body: {
            refresh_token,
          },
        });

        console.log(response);
      });
  },

  async getSession(context = null) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenService.get(context)}`,
      },
    })
      .then(async (res) => {
        const body = res.body;
        if (!res.ok) throw new Error("Não autorizado");
        return body.data;
      });
  },
};
