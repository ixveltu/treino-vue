import { addNews, deleteNews, getAllNews } from "@/utils/utils";
import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: [],
    loading: false,
    error: null,
  }),
  getters: {
    getNews: (state) => state.news,
    getNewsById: (state) => (id) => {
      return state.news.find((n) => n.id == id);
    },
  },
  actions: {
    async fetchAllNews() {
      this.loading = true;
      try {
        this.news = await getAllNews();
      } catch (e) {
        alert("error fetching news");
        console.log("error fetchin", e);
      } finally {
        this.loading = false;
      }
    },

    async deleteSingleNews(id) {
      await deleteNews(id);

      this.news = this.news.filter((n) => n.id != id);
    },

    async addNewsItem(newsObject) {
      this.loading = true;
      try {
        await addNews(newsObject);

        this.news.unshift(newsObject);
      } catch (e) {
        alert("error adding news item");
        console.log("error adding", e);
      } finally {
        this.loading = false;
      }
    },
  },
});
