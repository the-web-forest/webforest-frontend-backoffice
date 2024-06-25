import { useCallback, useMemo } from "react";
import { USER_NAME, TOKEN_TYPE, TOKEN } from "@/constants/userSession";
import { useSessionStorage } from "@uidotdev/usehooks";

type LoginInfo = {
  username: string;
  tokenType: string;
  token: string;
};

const useAuth = () => {
  const [username, setUsername] = useSessionStorage<string | null>(
    USER_NAME,
    null,
  );
  const [tokenType, setTokenType] = useSessionStorage<string | null>(
    TOKEN_TYPE,
    null,
  );
  const [token, setToken] = useSessionStorage<string | null>(TOKEN, null);

  const isAuth = useMemo(() => !!token, [token]);

  const login = useCallback(
    ({ username, tokenType, token }: LoginInfo) => {
      setUsername(username);
      setTokenType(tokenType);
      setToken(token);
    },
    [setUsername, setTokenType, setToken],
  );

  const logout = useCallback(() => {
    setUsername(null);
    setTokenType(null);
    setToken(null);
  }, [setUsername, setTokenType, setToken]);

  return {
    user: {
      username,
      tokenType,
      token,
    },
    isAuth,
    login,
    logout,
  };
};

export default useAuth;
