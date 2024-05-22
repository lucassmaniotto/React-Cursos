import React, { useState } from "react";
import { useRouter } from "next/router";
import { authService } from "../src/services/auth/authService";

export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = useState({
    usuario: "omariosouto",
    senha: "safepassword",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // onSubmit -> Controller
  // authService - > Service
  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .login({
        username: values.usuario,
        password: values.senha,
      })
      .then((res) => {
        //router.push("/auth-page-ssr");
        router.push("/auth-page-static");
      })
      .catch((error) => {
        alert(`Erro: ${error.message}`);
      });
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
