import {Form} from 'react-final-form'
import {LoginValidate} from "../Common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import btnStyle from "../Common/modulesCSS/button.module.css"

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) return <Redirect to={"/profile"}/>
    return (
        <div>
            <h1>Login</h1>
            <LoginPage onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const LoginPage = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit, submitError}) => (
            <form onSubmit={handleSubmit}>
                <LoginValidate captchaUrl={props.captchaUrl}/>
                <div>
                    <button className={btnStyle.button} type="submit">Login</button>
                </div>
            </form>
        )}
    />
)

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)