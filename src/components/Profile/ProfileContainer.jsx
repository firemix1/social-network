import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setProfileInfo, setStatusMe} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId = 15528
        this.props.setProfileInfo(userId)
        this.props.getStatus(userId)

    }

    render() {
        debugger
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
        status: state.profilePage.status
    }
}
export default compose(
    connect(mapStateToProps, {setProfileInfo, setStatusMe, getStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)
