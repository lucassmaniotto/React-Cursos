// Arquitetura Hexagonal
// Ports & Adapters
// Pode substituir o fetch por axios, por exemplo
// Garante consistência na comunicação com a API
export async function HttpClient(fetchUrl, fetchOptions) {
  const options = {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  };
  return fetch(fetchUrl, options).then(async (res) => {
    return {
      ok: res.ok,
      status: res.status,
      body: await res.json(),
    };
  });
}
