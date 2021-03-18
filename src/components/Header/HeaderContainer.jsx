import React from "react";
import axios from "axios";
import Header from "./Header";
import {setAuthUser} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me/", {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUser(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {setAuthUser})(HeaderContainer)
