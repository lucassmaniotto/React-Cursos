import nookies from "nookies";
import { tokenService } from "../../services/auth/tokenService";

// Arquitetura Hexagonal
// Ports & Adapters
// Pode substituir o fetch por axios, por exemplo
// Garante consistência na comunicação com a API
export async function HttpClient(fetchUrl, fetchOptions = {}) {
  const defaultHeaders = fetchOptions.headers || {};
  const options = {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...defaultHeaders,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  };
  return fetch(fetchUrl, options)
    .then(async (res) => {
      return {
        ok: res.ok,
        status: res.status,
        statusText: res.statusText,
        body: await res.json(),
      };
    })
    .then(async (res) => {
      if (!fetchOptions.refresh) return res;
      if (res.status !== 401) return res;

      // Middleware para tentar atualizar o token

      const isServer = Boolean(fetchOptions?.ctx);
      const currentRefreshToken =
        fetchOptions?.ctx?.req?.cookies["REFRESH_TOKEN_NAME"];
      
      try {
        // Tenta atualizar os tokens
        const refreshResponse = await HttpClient("http://localhost:3000/api/refresh", {
          method: isServer ? "PUT" : "GET",
          body: isServer ? { refresh_token: currentRefreshToken } : undefined,
        });
        
        const newAccessToken = refreshResponse.body.data.access_token;
        const newRefreshToken = refreshResponse.body.data.refresh_token;

        // Salva os novos tokens
        if (isServer) {
          nookies.set(fetchOptions.ctx, "REFRESH_TOKEN_NAME", newRefreshToken, {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
          });
        }

        tokenService.save(newAccessToken);

        // Tenta novamente a requisição original
        const retryResponse = await HttpClient(fetchUrl, {
          ...options,
          refresh: false,
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        });
        return retryResponse;
      } catch (err) {
        console.error(err);
        return res;
      }
    });
}
