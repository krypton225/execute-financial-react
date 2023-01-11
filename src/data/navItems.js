import GenerateID from "../utils/generateIDs";

const navItems = [
    { itemText: "home", itemLink: "home" },
    { itemText: "about", itemLink: "about" },
    { itemText: "testimonials", itemLink: "testimonials" },
    { itemText: "demo", itemLink: "demo" },
];

(() => GenerateID(navItems))();

export default navItems;