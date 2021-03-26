import React, {useEffect, useState} from "react";

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const onTextClick = () => {
        props.owner && setEditMode(true)
    }
    const outTextClick = () => {
        setEditMode(false)
        props.setStatusMe(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return (
        <div>
            {!editMode &&
            <div>
                <span onClick={onTextClick}>{props.status || "Your status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={outTextClick}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusHooks