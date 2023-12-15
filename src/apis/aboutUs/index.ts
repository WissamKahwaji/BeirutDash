import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { AboutUsInfo } from "./type";
import { createFormData } from "@/utils";

const getAboutUsInfo = async () => {
  const res = await publicInstance.get<AboutUsInfo>(API_ROUTES.ABOUT_US.GET);
  return res.data;
};
const updateAboutUsInfo = async (payload: AboutUsInfo) => {
  const data = createFormData(payload);
  const res = await publicInstance.post<AboutUsInfo>(
    API_ROUTES.ABOUT_US.GET,
    data
  );
  return res.data;
};
export { getAboutUsInfo, updateAboutUsInfo };
