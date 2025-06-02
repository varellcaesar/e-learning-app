import { LOCAL_STORAGE_KEYS } from "../constants";

const localStorageExt = {
  setLocalStorage: (key: string, value: object | string): void => {
    const data = typeof value === "object" ? JSON.stringify(value) : value;

    localStorage.setItem(key, data);
  },

  getLocalStorage: (key: string): string | object | null => {
    const data: string | null =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;

    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        return data;
      }
    } else {
      return null;
    }
  },
  removeLocalStorage: (key: string): void => {
    localStorage.removeItem(key);
  },

  clearLocalStorage: (): void => {
    localStorage.clear();
  },

  getToken: (): string => {
    return localStorageExt.getLocalStorage(
      LOCAL_STORAGE_KEYS.USER_INFO as string
    ) as string;
  },
};

export { localStorageExt };
