import axios from "axios";
const axiosInstance = axios.create({ baseURL: "https://api.unsplash.com" });
const ACCESS_KEY_API = "Ne-IfSMqxN66_C7rR-OL9vdgzXJTkt7BXvPQroeFV00";

export default async function getGalleryByQuery(imageName: string, page: number) {
  const data= axiosInstance.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${imageName}&client_id=${ACCESS_KEY_API}`
  );
  return data;
}