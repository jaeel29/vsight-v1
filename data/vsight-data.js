// Nedeed Icons
import IndustrialIcon from "../components/icons/industrial-icon";
import EmailIcon from "../components/icons/email-icon";
import PhoneIcon from "../components/icons/phone-icon";
import AddressIcon from "../components/icons/address-icon";

// Links (Header / Fouter / Menu)
export const links = ["Home", "About", "Services", "Founders", "Contact"];

// Landing Page Data
export const landingData = {
  titlePrimary: "Make your daily experience",
  titleSimple: "entertaining and augmented.",
  button: "Schedule Appointment",
};

// About Us Data (About Vsight)
export const aboutData = {
  label: "About us",
  title: "What we do",
  content:
    "Vsight is one of the first Moroccan startup that provides XR(*)solutions, we developpe maintenance, education, e-commerce, advertisement and more solutions. Our mission is to understand and remedy our client’s need by providing him the best solution that fits the client's demand. We developpe cross platform and user-friendly solutions which enable you to target a wider market.",
  more: "",
  button: "Read more",
};

// Services Data (Title / Label)
export const servicesSection = {
  label: "Services",
  title: "Simple process to start",
  button: "More services",
};

// Services Page (We will use this to create Dynamic page for each Service)
export const servicesPage = {
  industrial: {
    title: "Industrial",
    icon: <IndustrialIcon />,
  },
};

// This is the Founders section Data
export const foundersSection = {
  label: "Founders",
  title: "Who we are ?",
};

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

// Contact Section (Title - Label - Inputs)
export const contactSection = {
  label: " Contact us",
  title: "Connect with our team",
};

// Contact Info
export const contactInfo = {
  phoneNumber: "+212 679-828-546",
  phoneIcon: <PhoneIcon />,
  email: "Bocal@vsight.ma",
  emailIcon: <EmailIcon />,
  location: "1337 Lab",
  locationIcon: <AddressIcon />,
};
