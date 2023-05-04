
const Home = {
    "path": "/",
    "navbarLinkLabel": "Home 2",
    "order": 1,
    "data": {},
    "view": {
        "section-banner": {
            "component": "Banner",
            "img": "/images/home-banner.jpg",
            "supTitle": "Learn Anywhere, Learn Anytime",
            "title": "Banner",
            "subtitle":  "Learn Anywhere, Learn Anytime",
            "text": "Aute adipisicing cupidatat eiusmod id Lorem sint deserunt et veniam ea cupidatat ipsum minim reprehenderit. Lorem irure proident voluptate dolore Lorem incididunt pariatur. Elit enim nostrud irure dolore fugiat enim eiusmod sunt eu amet.",
            "actionButtons": [
                {
                    "label": "Hire",
                    "to": "/contact",
                    // "style": {"width": 400}
                },
                {
                    "label": "Services",
                    "to": "/services",
                    // "style": {"width": 400}
                }
            ],
            "bgColor": "#f2f2f2",
            "textColor": "#000",
            // "setImageAsBackground": true,
            // "rtl": true 
        },
        "section-text": {
            "component": "Text",
            "description": "Enim in fugiat reprehenderit incididunt est sunt tempor deserunt excepteur quis consequat nulla nostrud ex. In duis eiusmod do quis est in sit commodo consequat eu aliqua duis deserunt. Exercitation dolor mollit amet in sint do mollit magna. Lorem sunt sint aute incididunt aute. Ut consectetur non ipsum velit eu. Proident tempor esse voluptate consequat aliquip mollit. Aliquip labore consequat amet dolore minim reprehenderit amet tempor dolor incididunt nisi labore qui.",
            "title": "Text",
            "rtl": true,
            // "bgColor": "#f2f2f2",
            // "textColor": "#000",
        },
        "section-text-image": {
            "component": "TextImage",
            "img": "/images/home-banner.jpg",
            "description": "Enim in fugiat reprehenderit incididunt est sunt tempor deserunt excepteur quis consequat nulla nostrud ex. In duis eiusmod do quis est in sit commodo consequat eu aliqua duis deserunt. Exercitation dolor mollit amet in sint do mollit magna. Lorem sunt sint aute incididunt aute. Ut consectetur non ipsum velit eu. Proident tempor esse voluptate consequat aliquip mollit. Aliquip labore consequat amet dolore minim reprehenderit amet tempor dolor incididunt nisi labore qui.",
            "title": "Text + Image",
            "rtl": true,
            // "bgColor": "#f2f2f2",
            // "textColor": "#000",
        },
        "section-list-cards": {
            "component": "ListCards",
            "sectionTitle": "List",
            "cardInfo": [
                {
                    "title": "MM",
                    "img": "/images/home-banner.jpg",
                    "description": "Enim in fugiat reprehenderit ",
                },
                {
                    "title": "MM",
                    "img": "/images/home-banner.jpg",
                    "description": "Enim in fugiat reprehenderit ",
                },
                {
                    "title": "MM",
                    "img": "/images/home-banner.jpg",
                    "description": "Enim in fugiat reprehenderit incididunt ",
                }
            ],
            // "bgColor": "#f2f2f2",
            // "textColor": "#000",
        },
        "section-contact-us": {
            "component": "ContactForm",
            "sectionTitle": "Contact Us",
            "bgColor": "#f2f2f2",
            "textColor": "#000",
        }
    }
};

export default Home;