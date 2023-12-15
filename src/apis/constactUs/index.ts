import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { ContactUsInfo } from "./type";

const getContactUsInfo = async () => {
  const res = await publicInstance.get<ContactUsInfo>(
    API_ROUTES.CONTACT_US.GET
  );
  return res.data;
};
const addContactUsInfo = async (payload: ContactUsInfo) => {
  const res = await publicInstance.post<ContactUsInfo>(
    API_ROUTES.CONTACT_US.ADD,
    payload
  );
  return res.data;
};
export { getContactUsInfo, addContactUsInfo };
