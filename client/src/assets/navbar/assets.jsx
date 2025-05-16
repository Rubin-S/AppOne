import chat from './chat.svg?react'
import notification from './notification.svg?react'
import language from './language.svg?react'
import login from './login.svg?react'


export const navLinks = [
  { name: "Support", to: "/#", showIfLoggedIn: false, img: "" },
  { name: "Chats", to: "/#", showIfLoggedIn: true, img: chat },
  { name: "Notification", to: "/#", showIfLoggedIn: false, img: notification },
  { name: "English", to: "/#", showIfLoggedIn: false, img: language },
];

export const menuLinks = [
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
]