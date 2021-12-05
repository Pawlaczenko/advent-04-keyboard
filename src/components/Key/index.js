import React from 'react'
import styles from './_Key.module.scss';

const Key = ({ keyName, keyCode, modifier = null, isJiggling }) => {
    let keyClass = (modifier == null) ? "" : "utility";
    let jiggle = (isJiggling) ? "jiggle" : "";
    return (
        <button className={`${styles.key} ${styles[keyClass]} ${styles[jiggle]}`}>
            {keyName}
        </button >
    )
}

export default Key
