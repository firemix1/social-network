import preloader from "../../../images/preloader4.svg";
import React from "react";
import styles from "./Preloader.module.css"

const Preloader =() => {
    return(
        <div className={styles.preloader}>
            <img src={preloader} alt={"preloader"}/>
        </div>
    )
}
export default Preloader