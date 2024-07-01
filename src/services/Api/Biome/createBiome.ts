import { Biome } from "@/interfaces";
import httpClient from "@/services/Api/httpClient";

type CreateBiomeRequest = {
  name: string;
};

export async function createBiome(params: CreateBiomeRequest): Promise<Biome> {
  try {
    const response = await httpClient.post<Biome>(`pet`, params);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar bioma:", error);
    throw error;
  }
}
