import intance, * as request from "../instanceAxios.js";

export const getPageProduct = async (size, number, category) => {
  const response = await request.get(
    `product/page?size=${size}&&number=${number}&&category=${category}`
  );
  return response.data;
};

export const createProduct = async (product) => {
  const response = await request.post(`product`, product);
  return response;
};

export const updateProduct = async (product, id) => {
  const response = await intance.put(`product/${id}`, product);
  return response;
};
export const findByProductId = async (productId) => {
  const response = await request.get(`product/${productId}`);
  return response.data;
};
export const deleteProduct = async (id) => {
  const response = await intance.delete(`product/${id}`);
  return response;
};
