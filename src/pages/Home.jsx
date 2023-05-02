
const Home = {
    "path": "/",
    "navbarLinkLabel": "Home",
    "order": 1,
    "data": {},
    "view": {
        "section-banner": {
            "component": "Banner",
            "img": "/images/home-banner.jpg",
            "supTitle": "Learn Anywhere, Learn Anytime",
            "title": "Section Banner",
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
            "bgColor": "#ffc300",
            "textColor": "#fff",
            // "setImageAsBackground": true,
            // "rtl": true 
        },
        "section-text": {
            "component": "Text",
            "description": "Enim in fugiat reprehenderit incididunt est sunt tempor deserunt excepteur quis consequat nulla nostrud ex. In duis eiusmod do quis est in sit commodo consequat eu aliqua duis deserunt. Exercitation dolor mollit amet in sint do mollit magna. Lorem sunt sint aute incididunt aute. Ut consectetur non ipsum velit eu. Proident tempor esse voluptate consequat aliquip mollit. Aliquip labore consequat amet dolore minim reprehenderit amet tempor dolor incididunt nisi labore qui.",
            "title": "Text",
            "rtl": true,
        },
        "section-text-image": {
            "component": "TextImage",
            "img": "/images/home-banner.jpg",
            "description": "Enim in fugiat reprehenderit incididunt est sunt tempor deserunt excepteur quis consequat nulla nostrud ex. In duis eiusmod do quis est in sit commodo consequat eu aliqua duis deserunt. Exercitation dolor mollit amet in sint do mollit magna. Lorem sunt sint aute incididunt aute. Ut consectetur non ipsum velit eu. Proident tempor esse voluptate consequat aliquip mollit. Aliquip labore consequat amet dolore minim reprehenderit amet tempor dolor incididunt nisi labore qui.",
            "title": "Text + Image",
            "rtl": true,
        },
        "sections-list": {
            "component": "ListCards",
            "sectionTitle": "Section List",
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
            ]
        },
        "section-contact-us": {
            "component": "Form",
            "sectionTitle": "Contact Us",
            "inputs": [
                {
                    "label": "Full Name",
                    "type": "text",
                    "validation": "required",
                    "name": "full_name",
                    "placeholder": "Full Name",
                    "width": "50%"
                },
                {
                    "label": "Phone",
                    "type": "number",
                    "name": "phone",
                    "placeholder": "Eg. 888 888 8888",
                    "width": "50%"
                },
                {
                    "label": "Email",
                    "type": "text",
                    "validation": "email",
                    "name": "email",
                    "placeholder": "jhone@example.com",
                },
                {
                    "label": "Describe your query",
                    "type": "textarea",
                    "placeholder": "Describe your query (optional)",
                    "name": "description"
                }
            ],
            // "bgColor": "#ffc300",
            // "textColor": "#fff",
            // "submitButtonStyle": "primary", //primary, warning, info, danger
            //title="Contact us"
        }
    }
};

export default Home;