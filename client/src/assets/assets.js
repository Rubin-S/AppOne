import card1 from './card1.png';
import card2 from './card2.png';
import feature1 from './feature1.png';
import feature2 from './feature2.png';
import feature3 from './feature3.png';
import homeBanner from './home-banner.jpg';
import video1 from './video1.png';
import signupbg from './signupbg.jpg';

// Default export of an object containing all assets
export const images = { card1, card2, feature1, feature2, feature3, homeBanner, video1, signupbg };









const navLinks = [
    { name: "Support", to: "/login", auth: false },
    { name: "Chats", to: "/login", auth: true },
    { name: "Notification", to: "/login", auth: false },
    { name: "English", to: "/login", auth: false },
];





export const review_stats = [
    {
        number : "200+",
        text: "service provider",
    },
    {
        number: "200+",
        text: "visiters",
    },
    {
        number: "200+",
        text: "connection made per second",
    },
    {
        number: "200+",
        text: "verified users",
    }
]

export const reviews = [
    {
        highlight : "Great service!",
        review : "I found exactly what I was looking for. Highly recommend this platform!",
        name : "John Doe",
        location : "New York, USA",
    },
    {
        highlight : "Easy to use",
        review : "The interface is user-friendly and I was able to find a service in no time.",
        name : "Jane Smith",
        location : "Los Angeles, USA",
    },
    {
        highlight : "Highly recommend!",
        review : "I had a great experience. The service was top-notch and the team was very helpful.",
        name : "Emily Johnson",
        location : "Chicago, USA",
    },
    {
        highlight : "Excellent support",
        review : "The customer support was fantastic. They helped me every step of the way.",
        name : "Michael Brown",
        location : "Houston, USA",
    },
]

export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            { text: "Home", url: "#" },
            { text: "List your business", url: "#" },
            { text: "Enquire", url: "#" },
            { text: "Feedback", url: "#" },
        ],
    },
    {
        title: "User Help",
        links: [
            { text: "How to Videos", url: "#" },
            { text: "Account setting", url: "#" },
            { text: "FAQ", url: "#" },
            { text: "Technical Help", url: "#" },
        ],
    },
    {
        title: "Service & Listing",
        links: [
            { text: "Service catagories", url: "#" },
            { text: "Price & plans", url: "#" },
        ],
    },
    {
        title: "Contact Us",
        links: [
            { text: "WhatsApp Chat", url: "#" },
            { text: "Email Us", url: "#" },
            { text: "Call Us", url: "#" },
            { text: "Live Chat", url: "#" },
        ],
    },
    {
        title: "Additional Resoures",
        links: [
            { text: "Join Community Forums", url: "#" },
            { text: "Blog/Resources", url: "#" },
            { text: "Terms & Conditions", url: "#" },
            { text: "Privacy Policy", url: "#" },
        ],
    },
];








