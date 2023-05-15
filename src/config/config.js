import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa"

export const BRAND_NAME = 'MyCo';
export const BRAND_DESCRIPTION = "This is a short description used for both meta and footer description";
export const LOGO_PATH = "../../images/logo.png";

export const HEADER_CONFIG = {
    position: "fixed", // fixed, normal
    customNav: false,
    isNavbarLeft: false,
    // bgColor: "#2c6bcc",
    // textColor: "#f2f2f2",
};

export const FOOTER_CONFIG = {
    // description: "",
    // isFootNavigation: "",
    // isSocial: "",
    // isSubFooter: "",
    // isCredits: "",
    // creditInfo: "",
    // bgColor: "#f2f2f2",
    // borderColor: "#f2f2f2",
    // border: "#f2f2f2",
    copyrightInfo: "All Rights Reserved, DevStack Tutor",
    textColor: "",
    minHeight: "",
    subFooterBgColor: "",
    subFooterTextColor: "",
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