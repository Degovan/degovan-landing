import { FAQ, Portfolio } from "@/types";

export const getResponseService = {
  getProjects: async () => {
    try {
      const response = await fetch(`${process.env.API_URL}portfolios`);
      const result = await response.json();
      return result.data.portfolios as Portfolio[];
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getFAQs: async () => {
    try {
      const response = await fetch(`${process.env.API_URL}faqs`);
      const result = await response.json();
      return result.data.faqs as FAQ[];
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
