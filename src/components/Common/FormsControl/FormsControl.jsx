import {Field} from "react-final-form";
import {composeValidators, maxLength, empty, required} from "../../../utilits/validators/validators";
import styles from "./FormsControl.module.css"

export const MyPostWithValidate = () => {
    return <Field name="post" type="text" validate={composeValidators(maxLength, empty)}>
        {({input, meta}) => (
            <div>
                <textarea {...input} placeholder="What's new?"/>
                {meta.error && <span>{meta.error}</span>}
            </div>
        )}
    </Field>
}
export const NewMessageWithValidate = () => {
    return <Field name="message" type="text" validate={composeValidators(maxLength, empty)}>
        {({input, meta}) => (
            <div>
                <textarea {...input} placeholder="Type your message"/>
                {meta.error && <span>{meta.error}</span>}
            </div>
        )}
    </Field>
}
export const LoginValidate = () => {
    return <div className={styles.spanError}>
                <Field name="email" type="text" validate={composeValidators(required)}>
                    {({input, meta}) => (
                        <div>
                            <input {...input} placeholder="Email"/>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                            {meta.submitError && <div>{meta.submitError}</div>}
                        </div>
                    )}
                </Field>
                <Field name="password" type="password" validate={composeValidators(required)}>
                    {({input, meta}) => (
                        <div>
                            <input {...input} placeholder="Password"/>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="rememberMe" type="checkbox">
                    {({input, meta}) => (
                        <div>
                            <input {...input} /> remember me
                            {meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>

    </div>
}
