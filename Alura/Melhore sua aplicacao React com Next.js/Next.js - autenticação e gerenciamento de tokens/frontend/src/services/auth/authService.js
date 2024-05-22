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
};
