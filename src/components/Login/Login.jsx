import {Form} from 'react-final-form'
import {LoginValidate} from "../Common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import styles from "./Login.module.css"

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    // const onSubmit = async (formData) => {
    //     return await props.login(formData.email, formData.password, formData.rememberMe)
    // }
    if (props.isAuth) return <Redirect to={"/profile"}/>
    return (
        <div className={styles.loginBar}>
            <h1>Login</h1>
            <LoginPage onSubmit={onSubmit}/>
        </div>
    )
}

const LoginPage = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit, submitError}) => (
            <form onSubmit={handleSubmit} >
                <LoginValidate />
                <div>
                    <button type="submit">Login</button>
                </div>
                {submitError && <div>{submitError}</div>}
            </form>
        )}
    />
)
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)