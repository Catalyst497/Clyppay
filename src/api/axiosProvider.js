import axios, { AxiosError } from "axios"
import { useEffect } from "react"

let API_URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
    baseURL: API_URL,
})

let token = null

if (localStorage.getItem("access_token")) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "access_token",
    )}`
    axiosInstance.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
        "access_token",
    )}`
}

export const updateAuthToken = async (new_token, save) => {
    token = new_token
console.log("token", new_token, save)
    if (save) {
        localStorage.setItem("access_token", new_token)
        console.log('token saved')
    }
    axiosInstance.defaults.headers.common.Authorization = "Bearer " + new_token
    axiosInstance.defaults.headers.Authorization = "Bearer " + new_token
}

axiosInstance.interceptors.request.use(
    async (config) => {
        const fetch_token = localStorage.getItem("access_token")
        if (fetch_token) {
            await updateAuthToken(fetch_token, true)
            config.headers.Authorization = `Bearer ${fetch_token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.error(error?.toString())

        if (error?.response?.status === 401) {
            localStorage.removeItem("access_token")
            localStorage.removeItem("user")
        }

        return Promise.reject(error)
    },
)

const makeRequest = async (method, path, data, headers = {}) => {
    const endpoint = path
        ? `${API_URL}${path.charAt(0) === "/" ? "" : "/"}${path}`
        : null
    if (!endpoint) throw new Error("API request error: No endpoint provided")

    let config = {
        method: method,
        url: endpoint,
        data: data,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    }

    console.debug(
        `🚀 Requesting Api: %c${config.method.toUpperCase()} ===> %c${config?.url}\n`,
        "color: yellow",
        "color: yellow",
    )

    try {
        const res = await axiosInstance(config)
        return res
    } catch (err) {
        return Promise.reject(err)
    }
}

export const api = {
    get: async (path, headers = {}) =>
        await makeRequest("get", path, null, headers),
    post: async (path, data, headers = {}) =>
        await makeRequest("post", path, data, headers),
    patch: async (path, data, headers = {}) =>
        await makeRequest("patch", path, data, headers),
    put: async (path, data, headers = {}) =>
        await makeRequest("put", path, data, headers),
    delete: async (path, data, headers = {}) =>
        await makeRequest("delete", path, data, headers),
}

export const returnApiError = (error) => {
   const message =  error?.details ||
    error?.response?.data?.details ||
    error?.response?.data?.error ||
    error?.message ||
    "Network Error";
    console.log(error)
    console.log(message)
    return message
}