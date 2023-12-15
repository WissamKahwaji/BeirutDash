import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { GetProductParams, Product, ProductByType, ProductType } from "./type";
import { createFormData } from "@/utils";
const getProducts = async () => {
  const res = await publicInstance.get<Product[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCTS
  );
  return res.data;
};
const addProduct = async (payload: Product) => {
  const { type, ...rest } = payload;
  const data = createFormData({ type: type?._id, ...rest });

  const res = await publicInstance.post<Product>(
    API_ROUTES.PRODUCTS.GET_PRODUCTS,
    data
  );
  return res.data;
};
const editProduct = async (payload: Product) => {
  const { type, ...rest } = payload;
  const data = createFormData({ type: type?._id, ...rest });
  const res = await publicInstance.put<Product>(
    `${API_ROUTES.PRODUCTS.GET_PRODUCTS}/${payload._id}`,
    data
  );
  return res.data;
};
const deleteProduct = async (id: string) => {
  const res = await publicInstance.delete<Product>(
    `${API_ROUTES.PRODUCTS.GET_PRODUCTS}/${id}`
  );
  return res.data;
};
const getProductsByType = async (params: GetProductParams) => {
  const res = await publicInstance.get<ProductByType[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCTS_BY_TYPE,
    { params }
  );
  return res.data;
};
const getProductTypes = async () => {
  const res = await publicInstance.get<ProductType[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCT_TYPES
  );
  return res.data;
};
const getProductDetails = async (id: string | undefined) => {
  const res = await publicInstance.get<Product>(
    API_ROUTES.PRODUCTS.GET_PRODUCT_DETAILS(id)
  );
  return res.data;
};
const deleteProductType = async (id: string) => {
  const res = await publicInstance.delete<ProductType>(
    `${API_ROUTES.PRODUCTS.GET_PRODUCTS_BY_TYPE}/${id}`
  );
  return res.data;
};
export {
  getProductTypes,
  getProducts,
  getProductsByType,
  getProductDetails,
  addProduct,
  editProduct,
  deleteProduct,
  deleteProductType,
};
