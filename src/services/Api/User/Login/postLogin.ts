import httpClient from "@/services/Api/httpClient";

type PostLoginRequest = {
  email: string;
  password: string;
};

type PostLoginResponse = {
  token: string;
  expiration: string;
};

export async function postLogin(
  params: PostLoginRequest,
): Promise<PostLoginResponse> {
  try {
    const response = await httpClient.post<PostLoginResponse>(
      `user/login`,
      params,
    );
    return response.data;
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
}
