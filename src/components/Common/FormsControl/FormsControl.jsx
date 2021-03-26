import {Field} from "react-final-form";
import {composeValidators, maxLength, empty, required} from "../../../utilits/validators/validators";
import styles from "./FormsControl.module.css"

export const MyPostWithValidate = () => {
    return <div>
        {FieldElement("post", "text", "textarea", "What's new?", composeValidators(maxLength, empty)
        )}
    </div>
}
export const NewMessageWithValidate = () => {
    return <div>
        {FieldElement("message", "text", "textarea", "Type your message", composeValidators(maxLength, empty))}
    </div>
}
export const LoginValidate = () => {
    return <div className={styles.spanError}>
        {FieldElement("email", "text", "input", "Email", composeValidators(required))}
        {FieldElement("password", "password", "input", "Password", composeValidators(required))}
        {FieldElement("rememberMe", "checkbox", "input", null, null, "remember me")}
    </div>
}
const FieldElement = (name, type, Tag, placeholder, validators, text = "") => {
    return (
        <Field name={name} type={type} validate={validators}>
            {({input, meta}) => (
                <div>
                    <Tag {...input} placeholder={placeholder} /> {text}
                    {(meta.error && meta.touched && <span>{meta.error}</span>)}
                </div>
            )}
        </Field>
    )
}