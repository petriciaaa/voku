import { BACKEND_ORIGIN } from "@/shared/config/constants/hosts";
import axios, { Axios, AxiosError, AxiosResponse } from "axios";

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/users")
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
export const createUser = (data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BACKEND_ORIGIN + "auth/register", data)
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
