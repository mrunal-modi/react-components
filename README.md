# Developers >
Low Code No Code! > Simply update configuration to use react components in your website!

# Consumers >
Let AI do it all > Explore the use of AI to create the content for your website.

# Components >

<details>
<summary>Banner</summary>

#### Add a full-width banner

```
    "component": "Banner",
    "img": "/images/home-banner.jpg",
    "supTitle": "",
    "title": "",
    "subtitle":  "",
    "text": "",
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
    "setImageAsBackground": true,
    "rtl": true 
```
</details>


<details>
<summary>Text</summary>

#### Add a simple block of text

```
    "component": "Text",
    "description": "",
    "title": "Text",
    "rtl": true,
```
</details>


<details>
<summary>Text + Image</summary>

#### Add an image alongside a block of text

```
    "component": "TextImage",
    "img": "/images/home-banner.jpg",
    "description": "",
    "title": "Text + Image",
    "rtl": true,
```
</details>


<details>
<summary>List Cards</summary>

#### Add multiple items with images and text

```
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
```
</details>


<details>
<summary>Contact form</summary>

#### Add a contact form

```
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
```
</details>


<details>
<summary>Location</summary>

#### Display a map and location details

```
    TBC
```
</details>


<details>
<summary>Gallery</summary>

#### Display multiple images

```
    TBC
```
</details>


<details>
<summary>Testimonial</summary>

#### Display a quote or testimonial

```
    TBC
```
</details>


<details>
<summary>Embed</summary>

#### Embed an object with code

```
    TBC
```
</details>


<details>
<summary>Video</summary>

#### Display a YouTube video

```
    TBC
```
</details>


<details>
<summary>Image</summary>

#### Display a single image

```
    TBC
```
</details>







