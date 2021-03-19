import {connect} from "react-redux";
import Users from "./Users";
import {followUser, getUsers, toggleFollowingProcessing, unfollowUser} from "../../redux/users-reducer";
import React from "react"
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onSelectedPage = (page) => {
        this.props.getUsers(page, this.props.pageSize)
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
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           isFetching={this.props.isFetching}
                           followingInProgress={this.props.followingInProgress}
                           toggleFollowingProcessing={this.props.toggleFollowingProcessing}
                           unfollowUser={this.props.unfollowUser}
                           followUser={this.props.followUser}

                    />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    toggleFollowingProcessing,
    getUsers,
    unfollowUser,
    followUser
})(UsersContainer)
