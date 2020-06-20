import axios from "axios";

const base_url = "http://localhost:2020";

export const auth = (input, setData) => {
  let api_url = `${base_url}/users`;
  makeRequest(api_url, "post", input, setData);
};

export const makeRequest = async (url, type, params = {}, setData) => {
  setData(fetching);
  try {
    const response = await axios[type](url, params);
    setData(success(response.data));
  } catch (e) {
    setData(error(e));
  }
};

const fetching = () => {
  return { isFetching: true };
};

const success = (data) => {
  return { isFetching: false, data: data };
};

const error = (error) => {
  return { isFetching: false, hasError: true, error: error };
};
