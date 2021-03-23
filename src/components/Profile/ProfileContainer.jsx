import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setProfileInfo, setStatusMe} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedId
            if (!userId)
                this.props.history.push("/login")
        }
        this.props.setProfileInfo(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} setStatusMe={this.props.setStatusMe}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedId: state.auth.id

    }
}
export default compose(
    connect(mapStateToProps, {setProfileInfo, setStatusMe, getStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
