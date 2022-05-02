import axios from "axios";
import { DictionaryResponse, PhotosResponse } from "../types";

export async function getDictionaryApi(word: string) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response: DictionaryResponse = await axios.get(url);
  return response.data;
}

export async function getPexelsApi(word: string) {
  const key = "563492ad6f91700001000001e600859e320a4bc694188231ff1ec654";
  const url = `https://api.pexels.com/v1/search?query=${word}&per_page=12`;
  const response: PhotosResponse = await axios.get(url, {
    headers: { Authorization: `Bearer ${key}` },
  });
  return response.data.photos;
}
