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
export const createUser = (user: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3000/users", user)
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
