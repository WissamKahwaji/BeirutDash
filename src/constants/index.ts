import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AddIcon from "@mui/icons-material/Add";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
const NAV_LINKS = [
  { name: "orders", href: "/orders", icon: ProductionQuantityLimitsIcon },
  { name: "products", href: "/products", icon: CategoryIcon },
  { name: "product types", href: "/product-types", icon: CategoryIcon },

  { name: "add product", href: "/product", icon: AddIcon },
  { name: "about us", href: "/about-us", icon: InfoIcon },
  { name: "contact us", href: "/contact-us", icon: ContactPhoneIcon },
];
export { NAV_LINKS };
