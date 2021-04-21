// Nedeed Icons
import EmailIcon from "../components/icons/email-icon";
import PhoneIcon from "../components/icons/phone-icon";
import AddressIcon from "../components/icons/address-icon";

// Links name
export const links = ["about", "services", "founders", "blog", "contact"];

// Services names
export const services = [
  "industrial",
  "education",
  "e-commerce",
  "advertisement",
  "real-estat",
  "consulting",
];

// This is the Founders Object that contain all team members and there Info's
export const founders = [
  {
    name: "Youssef Moukhlis",
    job: "XR Developer Expert",
    image: "/images/youssef.png",
    linkedinUrl: "",
  },
  {
    name: "Saad El Yousfi",
    job: "CEO",
    image: "/images/saad.png",
    linkedinUrl: "",
  },
  {
    name: "Ahmed Khilad",
    job: "3D Graphic Expert",
    image: "/images/ahmed.png",
    linkedinUrl: "",
  },
];

// Contact Info
export const contactInfo = {
  phoneNumber: "+212 679-828-546",
  phoneIcon: <PhoneIcon />,
  email: "Bocal@vsight.ma",
  emailIcon: <EmailIcon />,
  location: "1337 Lab",
  locationIcon: <AddressIcon />,
};
