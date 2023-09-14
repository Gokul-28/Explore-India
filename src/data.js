// Importing the images for the Tour section 
import image1 from './images/Kerala.jpg'
import image2 from './images/Animalpark.jpg'
import image3 from './images/Tajmahal.jpg'
import image4 from './images/Ladakh.jpg'
// ______________________________________________

// Page line for the Navbar
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

// ______________________________________________

// Social media links for the Navbar and the footer
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];
// _________________________________________________

// Data for the service section where the explain about tours well be 

export const service = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "We specialize in crafting affordable and reasonable trips.",
    spanName: "service-icon",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless exploration",
    text: "Explore the endless wonders of India.",
    spanName: "service-icon",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Ensure your journey is comfortable and secure by choosing government-approved and certified travel companies.",
    spanName: "service-icon",
  },
];

//____________________________________________________

// Data where these array of object will be turned into a card for displaying the tour available

export const tourData = [
  {
    id :1,
    imgSrc: image1,
    date: "January 15 2024",
    title: "Kerala's Greenery",
    description:
      "Explore God's Own Country, Kerala, and be mesmerized by its stunning natural vistas.",
    icon: "fas fa-map",
    iconName: "Kerala",
    days: 9,
    price: 23900,
  },
  {
    id :2,
    imgSrc: image2,
    date: "Febuary 2 2024",
    title: "Tamil Nadu's Splendor",
    description:
      "Discover the captivating wildlife and lush forests of beautiful Tamil Nadu.",
    icon: "fas fa-map",
    iconName: "Tamil-Nadu",
    days: 14,
    price: 22500,
  },
  {
    id :3,
    imgSrc: image3,
    date: "March 15 2024",
    title: "Uttar Pradesh's Grandeur",
    description:
      "Experience the marvels of Uttar Pradesh and immerse yourself in its stunning architecture.",
    icon: "fas fa-map",
    iconName: "Uttar Pradesh",
    days: 10,
    price: 19500,
  },
  {
    id :4,
    imgSrc: image4,
    date: "May 17 2023",
    title: "Ladakh's Majesty",
    description:
      "Experience Ladakh's majestic landscapes and vibrant culture on an unforgettable journey.",
    icon: "fas fa-map",
    iconName: "Jammu and Kashmir",
    days: 9,
    price: 24000,
  }
];

//_______________________________________________________________________