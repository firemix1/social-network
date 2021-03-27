import {connect} from "react-redux";
import Users from "./Users";
import {followUser, requestUsers, toggleFollowingProcessing, unfollowUser} from "../../redux/users-reducer";
import React from "react"
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onSelectedPage = (page) => {
        this.props.requestUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <>
                <div>
                    {this.props.isFetching ? <Preloader/> : null}
                    <Users totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           selectedPage={this.onSelectedPage}
                           users={this.props.users}
                           followingInProgress={this.props.followingInProgress}
                           toggleFollowingProcessing={this.props.toggleFollowingProcessing}
                           unfollowUser={this.props.unfollowUser}
                           followUser={this.props.followUser}
                           authorizedId={this.props.authorizedId}
                    />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        authorizedId: state.auth.id
    }
}
export default compose(
    connect(mapStateToProps, {
        toggleFollowingProcessing,
        requestUsers,
        unfollowUser,
        followUser
    })
)(UsersContainer)