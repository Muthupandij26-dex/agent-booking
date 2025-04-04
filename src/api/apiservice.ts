import axios from "./axiosinterceptor";

type apiServiceType = {
  url: string;
  data?: unknown;
  customHeaders?: string;
  id?: unknown;
};

export const put = async (props: apiServiceType) => {
  try {
    const response = await axios.put(`${props.url}/${props.id}`, props.data, {
      headers: {
        "Content-Type": props.customHeaders || "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteApi = async (props: apiServiceType) => {
  try {
    const response = await axios.delete(`${props.url}/${props.id}`, {
      headers: {
        "Content-Type": props.customHeaders || "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
export const post = async (props: apiServiceType) => {
  try {
    const response = await axios.post(props.url, props.data, {
      headers: {
        "Content-Type": props.customHeaders || "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const get = async (props: apiServiceType) => {
  const params = props.data || {};
  try {
    const response = await axios.get(props.url, { params: params });
    return response.data;
  } catch (error) {
    return error;
  }
};


export const customDeleteApi = async (props: apiServiceType) => {
  try {
    const response = await axios.delete(`${props.url}`, {
      headers: {
        "Content-Type": props.customHeaders || "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
