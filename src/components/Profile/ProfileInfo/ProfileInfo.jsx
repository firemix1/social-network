import Preloader from "../../Common/Preloader/Preloader";
import React from "react";
import ProfileStatusHooks from "./ProfileStatusHooks";
import styles from "../Profile.module.css"
import userPhoto from "../../../images/emptyPhotoUser.png"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.profile}>  {/*full profile*/}
            <span  className={styles.photoUser}>
                <div className={styles.updatePhotoButton}> {props.owner && <input type="file" onChange={props.updatePhoto}/>} </div>
                {(!props.profile.photos.large)
                    ? <img src={userPhoto}/>
                    : <img src={props.profile.photos.large} alt={"large"}/>}

            </span>

            <div className={styles.infoBar}> {/* info bar*/}
                {/*name*/}
                <span className={styles.profileInfo}>
                   {props.profile.fullName}
                </span>
                {/*status*/}
                <div className={styles.profileStatus}>
                    <ProfileStatusHooks status={props.status}
                                        setStatusMe={props.setStatusMe}
                                        getStatus={props.getStatus}
                                        owner={props.owner}/>
                </div>
                <div> {/*info*/}
                    <div>
                        About me: {(props.profile.aboutMe) ? props.profile.aboutMe : null}
                    </div>
                    <div>
                        Looking for a job: {(props.profile.lookingForAJob) ? "yes" : "no"}
                    </div>
                    <div>
                        {(props.profile.lookingForAJobDescription) ? "Description: " + props.profile.lookingForAJobDescription : null}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo