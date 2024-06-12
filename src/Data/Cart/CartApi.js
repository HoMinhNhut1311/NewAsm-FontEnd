import intance, * as request from "../instanceAxios.js";

export const saveCart = async (cart) => {
  const response = await intance.post(`cart`, cart);
  return response;
};
