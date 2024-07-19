import { useCallback, useMemo } from "react";
import { TOKEN, TOKEN_EXPIRATION } from "@/constants/userSession";
import { useSessionStorage } from "@uidotdev/usehooks";

type LoginInfo = {
  token: string;
  tokenExpiration: string;
};

const useAuth = () => {
  const [token, setToken] = useSessionStorage<string | null>(TOKEN, null);
  const [tokenExpiration, setTokenExpiration] = useSessionStorage<
    string | null
  >(TOKEN_EXPIRATION, null);

  const isAuth = useMemo(() => !!token, [token]);

  const login = useCallback(
    ({ token, tokenExpiration }: LoginInfo) => {
      setTokenExpiration(tokenExpiration);
      setToken(token);
    },
    [setToken, setTokenExpiration],
  );

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpiration(null);
  }, [setToken, setTokenExpiration]);

  return {
    user: {
      token,
      tokenExpiration,
    },
    isAuth,
    login,
    logout,
  };
};

export default useAuth;
