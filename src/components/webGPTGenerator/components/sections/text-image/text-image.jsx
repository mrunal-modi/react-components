import ContentItem from "../../common/content-item/content-item";

const TextImage = ({ 
    id = "",
    className = "",
    img,
    description,
    rtl,
    title,
    imgHeight = "auto"
}) => {
    return (
        <ContentItem
            id={id}
            title={title}
            description={description}
            className = {className}
            img = {img}
            rtl = {rtl}
            imgHeight = {imgHeight}
        />
    )
}

export default TextImage;