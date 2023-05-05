import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa"

export const BRAND_NAME = 'MyCo';
export const BRAND_DESCRIPTION = "This is a short description for website which will be used for both meta and footer description";
export const LOGO_PATH = "../../images/logo.png";

export const HEADER_CONFIG = {
    position: "fixed", // fixed, sticky, normal
    customNav: false,
    isNavbarLeft: false,
    bgColor: "#2c6bcc",
    textColor: "#f2f2f2",
};

export const FOOTER_CONFIG = {
    // description: "",
    // isFootNavigation: "",
    copyrightInfo: "All Rights Reserved, DevStack Tutor",
    // isSocial: "",
    // isSubFooter: "",
    // isCredits: "",
    // creditInfo: "",

    // bgColor: "#f2f2f2",
    textColor: "#000",
    // borderColor: "#f2f2f2",
    // border: "#f2f2f2",
    minHeight: "",
    subFooterBgColor: "#fff",
    subFooterTextColor: "#000",
    socialLinksConfig: {
        color: "#bdbdbd"
    }
};

export const SOCIAL_LINKS = [
    {
        link: "/",
        icon: <FaTwitter />,
        label: "Twitter"
    },
    {
        link: "/",
        icon: <FaInstagram />,
        label: "Instagram"
    },
    {
        link: "/",
        icon: <FaDiscord />,
        label: "Discord"
    }
];