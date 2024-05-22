import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
  async login({ username, password }) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      body: { username, password },
    }).then(async (res) => {
      const body = res.body;
      if (!res.ok) throw new Error("Usuário ou senha inválidos");
      tokenService.save(body.data.access_token);
      return body;
    });
  },

  async getSession(context = null) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenService.get(context)}`,
      },
    }).then(async (res) => {
      const body = res.body;
      if (!res.ok) throw new Error("Não autorizado");
      return body.data;
    });
  },
};
