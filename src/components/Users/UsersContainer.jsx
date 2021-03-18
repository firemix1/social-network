import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProcessing,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import React from "react"
import Preloader from "../Preloader/Preloader";
import {usersApi} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount)
                }
            )
    }

    onSelectedPage = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersApi.getUsers(page, this.props.pageSize).then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                }
            )
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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProcessing})(UsersContainer)
