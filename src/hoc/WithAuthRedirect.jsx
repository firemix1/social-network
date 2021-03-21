import {Redirect} from "react-router";
import React from "react";
import {connect} from "react-redux";

const mapStateToPropsAut = (state) => {
    return { isAuth: state.auth.isAuth }
}
export const withAuthRedirect = (Component) => {
    let AuthRedirect = (props) => {
        if(!props.isAuth) { return <Redirect to={"/login"} /> }
        return <Component {...props} />
    }
    AuthRedirect = connect(mapStateToPropsAut)(AuthRedirect)
    return AuthRedirect
}