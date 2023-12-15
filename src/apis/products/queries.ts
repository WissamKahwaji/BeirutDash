import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProduct,
  deleteProduct,
  deleteProductType,
  editProduct,
  getProductDetails,
  getProductTypes,
  getProducts,
  getProductsByType,
} from ".";
import { GetProductParams, Product } from "./type";
import { toast } from "react-toastify";
import { Product as TProduct } from "@/components/items/dialogs/deleteProduct/type";
const useGetProductsQuery = () =>
  useQuery({ queryKey: ["products"], queryFn: () => getProducts() });
const useGetProductsByTypeQuery = (params: GetProductParams) =>
  useQuery({
    queryKey: ["products-by-type", params.type],
    queryFn: () => getProductsByType(params),
  });
// const useGetProductTypesAutocompleteDataQuery = () =>
//   useQuery({
//     queryKey: ["product-types"],
//     queryFn: () => getProductTypes(),
//     select(data) {
//       return data.map((types) => ({ _id: types?._id, label: types?.name }));
//     },
//   });
const useGetProductTypesQuery = () =>
  useQuery({ queryKey: ["product-types"], queryFn: () => getProductTypes() });
const useGetProductDetailsQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["product-details", id],
    queryFn: () => getProductDetails(id),
    staleTime: 0,
    enabled: !!id,
  });
const useAddProductMutation = () => {
  return useMutation({
    mutationKey: ["add-product"],
    mutationFn: (payload: Product) => addProduct(payload),
    onSuccess(data, variable) {
      toast.success(`add ${variable.title} successfully.`);
    },
    onError(data, variable) {
      toast.error(`failed to add ${variable.title}`);
    },
  });
};
const useEditProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-product"],
    mutationFn: (payload: Product) => editProduct(payload),
    onSuccess(data, variable) {
      toast.success(`edit ${variable.title} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["product-details"] });
    },
    onError(data, variable) {
      toast.error(`failed to edit ${variable.title}`);
    },
  });
};
const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-product"],
    mutationFn: ({ id }: TProduct) => {
      return deleteProduct(id);
    },
    onSuccess(data, variable) {
      toast.success(`delete ${variable.name} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["products-by-type"] });
    },
    onError(data, variable) {
      toast.error(`failed to delete ${variable.name}`);
    },
  });
};
const useDeleteProductTypeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-product-type"],
    mutationFn: ({ id }: TProduct) => {
      return deleteProductType(id);
    },
    onSuccess(data, variable) {
      toast.success(`delete ${variable.name} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["products-types"] });
    },
    onError(data, variable) {
      toast.error(`failed to delete ${variable.name}`);
    },
  });
};
export {
  useGetProductTypesQuery,
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useGetProductsByTypeQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
  useDeleteProductTypeMutation,
  // useGetProductTypesAutocompleteDataQuery,
};
