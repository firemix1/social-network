import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     this.props.setAuthMe()
    // }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,

})

export default connect(mapStateToProps, {logout})(HeaderContainer)
