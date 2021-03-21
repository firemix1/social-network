import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import Profile from "../Profile";
import React from "react";

const ProfileInfo =(props) =>{
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            {/*<div> <img src="https://i.pinimg.com/originals/13/51/09/1351098f1adf187d55fa71520d8fe200.jpg" alt="avatar"/> </div>*/}
            <div>
                ava description
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                <ProfileStatus status={props.status}
                               setStatusMe={props.setStatusMe}
                               getStatus={props.getStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo