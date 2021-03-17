import preloader from "../../images/preloader.svg";
import React from "react";
import styles from "./Preloader.module.css"

const Preloader =() => {
    return(
        <div className={styles.preloader}>
            <img src={preloader}/>
        </div>
    )
}
export default Preloader