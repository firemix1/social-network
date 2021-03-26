import React from 'react'
import User from "./User";
import Paginator from "../Common/Paginator/Paginator";

let Users = (props) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       selectedPage={props.selectedPage}/>
            <User users={props.users}
                  followingInProgress={props.followingInProgress}
                  toggleFollowingProcessing={props.toggleFollowingProcessing}
                  unfollowUser={props.unfollowUser}
                  followUser={props.followUser}
                  authorizedId={props.authorizedId}
            />
        </div>
    )
}

export default Users