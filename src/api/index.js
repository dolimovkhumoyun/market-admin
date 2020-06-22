import axios from "axios";

const base_url = "http://localhost:2020";

export const auth = (input, setData) => {
  let api_url = `${base_url}/users`;
  makeRequest(api_url, "post", setData, input);
};

export const getCategories = (setData) => {
  let api_url = `${base_url}/category/all`;
  makeRequest(api_url, "get", setData);
};

export const makeRequest = async (url, type, setData, params = {}) => {
  setData(fetching);
  const response = await axios[type](url, params);
  if (response.data.statusCode === 200) setData(success(response.data));
  else setData(error(response.data));
};

const fetching = () => {
  return { isFetching: true, hasError: false };
};

const success = (data) => {
  return { isFetching: false, hasError: false, data: data.data };
};

const error = (error) => {
  return { isFetching: false, hasError: true, error: error };
};
