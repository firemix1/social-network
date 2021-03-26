import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setPhoto, setProfileInfo, setStatusMe} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
    loadProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedId
            if (!userId)
                this.props.history.push("/login")
        }
        this.props.setProfileInfo(userId)
        this.props.getStatus(userId)
    }

    updatePhoto = (e) => {
        if (e.target.files.length)
            this.props.setPhoto(e.target.files[0])
    }

    componentDidMount() {
        this.loadProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.userId !== this.props.match.params.userId)
            this.loadProfile()
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     setStatusMe={this.props.setStatusMe}
                     owner={!this.props.match.params.userId}
                     updatePhoto={this.updatePhoto}
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
    connect(mapStateToProps, {setProfileInfo, setStatusMe, getStatus, setPhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
