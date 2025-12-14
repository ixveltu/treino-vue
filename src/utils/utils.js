import * as api from "@/api/api";

const BASE_URL = "http://localhost:3000";

export async function getAllNews() {
  return await api.get(BASE_URL, "news");
}

export async function deleteNews(newsId) {
  return await api.del(BASE_URL, `news/${newsId}`);
}

export async function addNews(newsObject) {
  return await api.post(BASE_URL, "news", newsObject);
}
