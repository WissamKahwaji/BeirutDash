const PRODUCTS = {
  GET_PRODUCTS: "/products",
  GET_PRODUCTS_BY_TYPE: "/products/type-products",
  GET_PRODUCT_TYPES: "/products/product-type",
  GET_PRODUCT_TYPE_DETAILS: (id: string | undefined) =>
    `/products/get-type/${id}`,
  EDIT_PRODUCT_TYPE: (id: string | undefined) => `/products/product-type/${id}`,
  DELETE_PRODUCT_TYPE: (id: string | undefined) =>
    `/products/delete-product-type/${id}`,
  GET_PRODUCT_DETAILS: (id: string | undefined) => `/products/byid/${id}`,
};
const COMMON = {
  GET_LOGO: "logo",
};
const HOME_DATA = {
  GET: "/home",
};
const CONTACT_US = {
  GET: "/contact",
  Edit: (id: string | undefined) => `contact/edit-contact-data/${id}`,
};
const ABOUT_US = {
  GET: "/about",
};
const API_ROUTES = { PRODUCTS, COMMON, HOME_DATA, CONTACT_US, ABOUT_US };
export default API_ROUTES;
