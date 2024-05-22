import React, { useState } from "react";
import { useRouter } from "next/router";

export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = useState({
    usuario: "lucas.schuch",
    senha: "safePassword",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/auth-page-ssr");
    // router.push("/auth-page-static");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuário"
          name="usuario"
          defaultValue={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          defaultValue={values.senha}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}
