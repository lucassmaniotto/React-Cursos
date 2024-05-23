import { useEffect } from "react";
import { useRouter } from "next/router";
import { HttpClient } from "../src/infra/HttpClient/HttpClient";
import { tokenService } from "../src/services/auth/tokenService";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(async () => {
    try {
      await HttpClient("/api/refresh", {
        method: "DELETE",
      });
      tokenService.delete();
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return <div>Logging out...</div>;
}
