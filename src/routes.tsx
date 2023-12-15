import React, { Suspense, lazy } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import LoadingPage from "./pages/loadingPage";
import Products from "./pages/products";
const ContactUs = lazy(() => import("@/pages/contactUs"));
const AboutUs = lazy(() => import("@/pages/aboutUs"));
const Product = lazy(() => import("@/pages/product"));
const ProductTypes = lazy(() => import("@/pages/productTypes"));
const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<App />}>
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="product-types" element={<ProductTypes />} />
        </Route>
      </Route>
    )
  );
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={routes} />;
    </Suspense>
  );
};

export default Routes;
