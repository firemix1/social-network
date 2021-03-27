import React, {useState} from 'react'
import styles from "./Paginator.module.css"
import btnStyle from "../modulesCSS/button.module.css";


let Paginator = ({totalUsersCount, pageSize, currentPage, selectedPage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let lastPortionNumber = (portionNumber - 1) * portionSize + 1
    let nextPortionNumber = portionNumber * portionSize

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} className={btnStyle.button}>Previous</button>}

            {pages
                .filter((p => p >= lastPortionNumber && p <= nextPortionNumber))
                .map((p) => {
                    return (
                        <span key={p} className={(currentPage === p && styles.selected) + " " + styles.pages}
                              onClick={e => {
                                  selectedPage(p)
                              }}>
                             {p}
                        </span>
                    )
                })}
            {portionCount > portionNumber
            && <button onClick={() => setPortionNumber(portionNumber + 1)} className={btnStyle.button}>Next</button>}
        </div>
    )
}

export default Paginator