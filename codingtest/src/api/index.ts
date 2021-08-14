import axios, { AxiosResponse } from "axios";

export const getItems = async (): Promise<AxiosResponse> => {
  return await axios.get("http://localhost:3000/requests");
};
