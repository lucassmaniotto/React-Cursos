import React, { useState } from "react";
import { useRouter } from "next/router";
import { authService } from "../src/services/auth/authService";

export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = useState({
    usuario: "lucas.schuch",
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
  const handleSubmit = (e, route) => {
    e.preventDefault();
    authService
      .login({
        username: values.usuario,
        password: values.senha,
      })
      .then((res) => {
        router.push(route);
      })
      .catch((error) => {
        alert(`Erro: ${error.message}`);
      });
  };

  return (
    <div>
      <h1>Login - Auth Page Static</h1>
      <form onSubmit={(e) => handleSubmit(e, "/auth-page-static")}>
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
      <p>
        <a href="/auth-page-static">Acessar página Server Client Render sem login</a>
      </p>
      <h1>Login - Auth Page Server Side Render</h1>
      <form onSubmit={(e) => handleSubmit(e, "/auth-page-ssr")}>
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
      <p>
        <a href="/auth-page-ssr">Acessar página Server Side Render sem login</a>
      </p>
    </div>
  );
}
