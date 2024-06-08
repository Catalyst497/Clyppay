// api.js

import { api } from "../axiosProvider";


// Define your API endpoints
const endpoints = {
  getCountries: '/user-gateway/get-available-countries',
  getCoinsMarketData: '/market-api/fetch-coins-market-data'

};

// Function to make a GET request to the API
const get = async (endpoint, params) => {
  try {
    const response = await api.default.get(endpoint, { params });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data from ${endpoint}: ${error.message}`);
  }
};

// Define functions to make requests to each endpoint
export const getCountries = async () => {
  return get(endpoints.getCountries);
};
export const getCoinsMarketData = async () => {
  return get(endpoints.getCoinsMarketData);
};




