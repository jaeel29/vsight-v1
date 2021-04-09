// Nedeed Icons
import IndustrialIcon from "../components/icons/industrial-icon";

// Links (Header / Fouter / Menu)
export const links = ["About", "Services", "Founders", "Contact"];

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
    content:
      "INDUSTRIAL dolor sit amet consectetur, adipisicing elit. A quo qui quia! Excepturi repellendus cupiditate quasi in quidem rem assumenda perferendis, eum deserunt consequatur labore quisquam amet aliquid unde mollitia.",
    Icon: IndustrialIcon,
  },
  education: {
    title: "Education",
    content:
      "INDUSTRIAL dolor sit amet consectetur, adipisicing elit. A quo qui quia! Excepturi repellendus cupiditate quasi in quidem rem assumenda perferendis, eum deserunt consequatur labore quisquam amet aliquid unde mollitia.",
    Icon: IndustrialIcon,
  },
  "e-commerce": {
    title: "E-commerce",
    content:
      "INDUSTRIAL dolor sit amet consectetur, adipisicing elit. A quo qui quia! Excepturi repellendus cupiditate quasi in quidem rem assumenda perferendis, eum deserunt consequatur labore quisquam amet aliquid unde mollitia.",
    Icon: IndustrialIcon,
  },
  advertisement: {
    title: "Advertisement",
    content:
      "INDUSTRIAL dolor sit amet consectetur, adipisicing elit. A quo qui quia! Excepturi repellendus cupiditate quasi in quidem rem assumenda perferendis, eum deserunt consequatur labore quisquam amet aliquid unde mollitia.",
    Icon: IndustrialIcon,
  },
  "real-estate": {
    title: "Real-estate",
    content:
      "INDUSTRIAL dolor sit amet consectetur, adipisicing elit. A quo qui quia! Excepturi repellendus cupiditate quasi in quidem rem assumenda perferendis, eum deserunt consequatur labore quisquam amet aliquid unde mollitia.",
    Icon: IndustrialIcon,
  },
  consulting: {
    title: "Consulting",
    content:
      "EDUCATION dolor sit amet consectetur, adipisicing elit. A quo qui quia! Excepturi repellendus cupiditate quasi in quidem rem assumenda perferendis, eum deserunt consequatur labore quisquam amet aliquid unde mollitia.",
    Icon: IndustrialIcon,
  },
};

// By default the Services Page is an Object so we can't map over it
// We need to create an Array for the existing Object
// Firstly we declare an empty Array
const servicesPageArray = [];

// Then we will use The servicesArray function
export const servicesArray = () => {
  // This Function use the (for in) Loop over all services object and push each services to the ( servicesPageArray ) and Return it
  for (const service in servicesPage) {
    servicesPageArray.push(servicesPage[service]);
  }
  return servicesPageArray; // [{...}, {...}] The result of This function
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
