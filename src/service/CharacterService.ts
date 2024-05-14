import axios from "axios";
import { CharacterResponse } from "../types/character.types";
import { Episode } from "../types/episode.types";

class CharacterService {
  async getAllCharacters(page: string): Promise<CharacterResponse> {
    const response = await axios.get<CharacterResponse>(
      import.meta.env.VITE_SERVER_URL,
      {
        params: { page },
      }
    );
    return response.data;
  }
  async getEpisode(episodeUrl: string): Promise<Episode> {
    const response = await axios.get<Episode>(episodeUrl);
    return response.data;
  }
}

const characterService = new CharacterService();
export default characterService;
