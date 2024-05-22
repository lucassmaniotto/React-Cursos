import nookies from "nookies";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";

const ONE_SECOND = 1;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_YEAR = 365 * ONE_DAY;

export const tokenService = {
  save(token, context = null) {
    globalThis?.sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
    nookies.set(context, ACCESS_TOKEN_KEY, token, {
      path: "/",
      maxAge: ONE_YEAR,
    });
  },
  get(context = null) {
    const cookies = nookies.get(context);
    return cookies[ACCESS_TOKEN_KEY] || "";
  },
  remove(context = null) {
    globalThis?.sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
    nookies.destroy(context, ACCESS_TOKEN_KEY, {
      path: "/",
    });
  },
};
