import {Form} from 'react-final-form'
import {LoginValidate} from "../Common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) return <Redirect to={"/profile"}/>
    return (
        <div>
            <h1>Login</h1>
            <LoginPage onSubmit={onSubmit}/>
        </div>
    )
}

const LoginPage = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit, submitError}) => (
            <form onSubmit={handleSubmit}>
                <LoginValidate />
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        )}
    />
)
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)