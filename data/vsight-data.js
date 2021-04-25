// Nedeed Icons
import EmailIcon from "../components/icons/contact/email-icon";
import PhoneIcon from "../components/icons/contact/phone-icon";
import AddressIcon from "../components/icons/contact/address-icon";

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
    image: "/images/founders/youssef.png",
    linkedinUrl: "https://www.linkedin.com/in/moukhlis-youssef-9453ab198/",
  },
  {
    name: "Saad El Yousfi",
    job: "CEO",
    image: "/images/founders/saad.png",
    linkedinUrl: "https://www.linkedin.com/in/saad-el-yousfi-b64708183/",
  },
  {
    name: "Ahmed Khilad",
    job: "3D Graphic Expert",
    image: "/images/founders/ahmed.png",
    linkedinUrl: "https://www.linkedin.com/in/ahmed-khilad-46a50a151/",
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
