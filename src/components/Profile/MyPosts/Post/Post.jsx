import styles from './Post.module.css'
import btnStyle from "../../../Common/modulesCSS/button.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.post}>
                <img src="https://www.doctorlasercursos.com.br/uploads/avatars/2016/06/empty-avatar.jpg" alt="avatar"/>
                {props.message}
            </div>
            <div className={styles.likes}>
                <div className={styles.count}>
                    {props.likesCount}
                </div>
                <button className={styles.btn + " " + btnStyle.button} >Like it</button>
            </div>
        </div>
    )
}
export default Post