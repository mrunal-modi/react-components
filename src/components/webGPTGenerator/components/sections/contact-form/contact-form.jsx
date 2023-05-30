import { useMemo } from "react";
import Form from "../../common/form/form";

const ContactForm = ({
    inputs = [
        {
            "label": "Full Name",
            "type": "text",
            "validation": "required",
            "name": "full_name",
            "placeholder": "e.g. John Sharma",
            "width": "50%"
        },
        {
            "label": "Phone",
            "type": "number",
            "name": "phone",
            "placeholder": "e.g. +91 888 888 8888",
            "width": "50%"
        },
        {
            "label": "Email",
            "type": "text",
            "validation": "email",
            "name": "email",
            "placeholder": "e.g. john@example.com",
        },
        {
            "label": "Describe your query",
            "type": "textarea",
            "placeholder": "e.g. Can you please help me?",
            "name": "description"
        }
    ],
    id = "",
    isEmailRequired = true,
    isPhoneRequired = true,
    isMessageRequired = true,
    submitButtonStyle = "primary",
    title = "Contact Us",
}) => {
    let _inputs = useMemo(() => {
        return inputs.filter((el) => {
            if (!isEmailRequired && el.name === "email")
                return false
            if (!isPhoneRequired && el.name === "phone")
                return false
            if (!isMessageRequired && el.name === "description")
                return false
            return true
        })
    }, [inputs, isEmailRequired, isPhoneRequired, isMessageRequired])
    return (
        <Form
            id={id}
            inputs={_inputs}
            submitButtonStyle={submitButtonStyle}
            title={title}
        />
    )
}

export default ContactForm;