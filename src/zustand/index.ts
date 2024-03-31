import { create } from "zustand";
import axios from "axios";

const localUrl = "";

interface CreateI {
  body: object;
  url: string;
  headers?: object;
}

export const handleErrorResponse = (error: any): any => {
  if (error.response !== undefined) {
    return {
      message: error.response.data.message,
      data: error.response.data?.data,
    };
  }
  return { message: error.message };
};

const useApiStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchData: async (url: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(localUrl + url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      let entityName = url.split("/").pop() as string;
      if (entityName?.split("?").length > 1) {
        entityName = `${entityName.split("?")[0]}Query`;
      }
      set({ loading: false, [entityName]: res.data });
    } catch (error) {
      set({ loading: false, error: handleErrorResponse(error) });
    }
  },

  deleteData: async (url: string) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(localUrl + url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      set({ loading: false });
    } catch (error) {
      set({ loading: false, error: handleErrorResponse(error) });
    }
  },

  createData: async ({ body, url, headers }: CreateI) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(localUrl + url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          ...headers,
        },
      });
      set({ loading: false, latestCreation: res.data });
    } catch (error) {
      set({ loading: false, error: handleErrorResponse(error) });
    }
  },

  updateData: async ({ body, url }: Partial<CreateI>) => {
    set({ loading: true, error: null });
    try {
      await axios.patch(localUrl + url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      set({ loading: false });
    } catch (error) {
      set({ loading: false, error: handleErrorResponse(error) });
    }
  },
}));

export default useApiStore;
