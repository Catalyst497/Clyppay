// api.js

import axios from "axios";

const defaultAPI = import.meta.env.VITE_API_URL;
const cryptoAPI = import.meta.env.VITE_CRYPTO_API_URL;

// Helper function to create axios instances
const createAxiosInstance = (baseURL) => {
  const instance = axios.create({ baseURL });

  // Set token if available
  const token = localStorage.getItem("access_token");
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  // Request interceptor to attach token
  instance.interceptors.request.use(
    (config) => {
      const fetch_token = localStorage.getItem("access_token");
      if (fetch_token) {
        config.headers.Authorization = `Bearer ${fetch_token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor to handle errors
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

// Creating axios instances
const defaultAxios = createAxiosInstance(defaultAPI);
const cryptoAxios = createAxiosInstance(cryptoAPI);

// Function to update authentication token
export const updateAuthToken = async (newToken, save = true) => {
  if (save) {
    localStorage.setItem("access_token", newToken);
  }
  // Update token for all instances
  defaultAxios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
  cryptoAxios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
};

// Generic function to make requests
const makeRequest = async (instance, method, path, data, headers = {}) => {
  const endpoint = path ? `${path.charAt(0) === "/" ? "" : "/"}${path}` : null;
  if (!endpoint) throw new Error("API request error: No endpoint provided");

  let config = {
    method,
    url: endpoint,
    data,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  console.debug(
    `🚀 Requesting Api: %c${config.method.toUpperCase()} ===> %c${
      config?.url
    }\n`,
    "color: yellow",
    "color: yellow"
  );

  try {
    const res = await instance(config);
    return res;
  } catch (err) {
    return Promise.reject(err);
  }
};

// API object to handle requests
export const api = {
  default: {
    get: (path, headers = {}) =>
      makeRequest(defaultAxios, "get", path, null, headers),
    post: (path, data, headers = {}) =>
      makeRequest(defaultAxios, "post", path, data, headers),
    patch: (path, data, headers = {}) =>
      makeRequest(defaultAxios, "patch", path, data, headers),
    put: (path, data, headers = {}) =>
      makeRequest(defaultAxios, "put", path, data, headers),
    delete: (path, data, headers = {}) =>
      makeRequest(defaultAxios, "delete", path, data, headers),
  },
  crypto: {
    get: (path, headers = {}) =>
      makeRequest(cryptoAxios, "get", path, null, headers),
    post: (path, data, headers = {}) =>
      makeRequest(cryptoAxios, "post", path, data, headers),
    patch: (path, data, headers = {}) =>
      makeRequest(cryptoAxios, "patch", path, data, headers),
    put: (path, data, headers = {}) =>
      makeRequest(cryptoAxios, "put", path, data, headers),
    delete: (path, data, headers = {}) =>
      makeRequest(cryptoAxios, "delete", path, data, headers),
  },
};

// Utility function for error handling
export const returnApiError = (error) => {
  const message =
    error?.details ||
    error?.response?.data?.details ||
    error?.response?.data?.error ||
    error?.message ||
    "Network Error";
  console.log(error);
  console.log(message);
  return message;
};
