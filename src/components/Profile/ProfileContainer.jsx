import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profile-reducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId = 2
        this.props.setProfileInfo(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileInfo})(WithUrlComponent)