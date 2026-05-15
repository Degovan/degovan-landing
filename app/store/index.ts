import { create } from "zustand";

import { FAQ, Portfolio } from "@/types";
import { getResponseService } from "@/services";

interface StoreState {
  faq: FAQ[];
  projects: Portfolio[];
  setProjects: (data: Portfolio[]) => void;
  setFAQs: (data: FAQ[]) => void;
  fetchProjects: () => Promise<void>;
  fetchFAQs: () => Promise<void>;
}

export const useStore = create<StoreState>((set) => ({
  projects: [],
  faq: [],
  setProjects: (projects) => set({ projects }),
  setFAQs: (faq) => set({ faq }),

  fetchFAQs: async () => {
    const faq = await getResponseService.getFAQs();
    set({ faq });
  },
  fetchProjects: async () => {
    const projects = await getResponseService.getProjects();
    set({ projects });
  },
}));
