
const Home = {
    "path": "/",
    "navbarLinkLabel": "Home",
    "order": 1,
    "data": {},
    "view": {
        "section-banner": {
            "component": "Banner",
            "img": "/images/home-banner.jpg",
            "supTitle": "<<insert generic supertitle for the website goal>>",
            "title": "<<insert generic title for the website goal>>",
            "subtitle":  "<<insert generic subtitle for the website goal>>",
            "text": "<<insert generic text for the website goal>>",
            "actionButtons": [
                {
                    "label": "Hire",
                    "href": "#section-contact-us",
                    // "style": {"width": 400}
                },
                {
                    "label": "Services",
                    "href": "#section-list-cards",
                    // "style": {"width": 400}
                }
            ],
            // "bgColor": "#f2f2f2",
            // "textColor": "#000",
            // "setImageAsBackground": true,
            // "rtl": true 
        },
        "section-text": {
            "component": "Text",
            "description": "<<insert generic description for the website goal>>",
            "title": "<<insert generic title for the website goal>>",
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
                    "img": "/images/home-banner-old.jpg",
                    "description": "Enim in fugiat reprehenderit ",
                },
                {
                    "title": "MM",
                    "img": "/images/home-banner-old.jpg",
                    "description": "Enim in fugiat reprehenderit ",
                },
                {
                    "title": "MM",
                    "img": "/images/home-banner-old.jpg",
                    "description": "Enim in fugiat reprehenderit incididunt ",
                }
            ],
            // "bgColor": "#f2f2f2",
            // "textColor": "#000",
        },
        "section-contact-us": {
            "component": "ContactForm",
            "sectionTitle": "Contact Us",
            // "bgColor": "#f2f2f2",
            // "textColor": "#000",
        }
    }
};

export default Home;