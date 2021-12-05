import React from 'react'
import styles from './_Key.module.scss';

const Key = ({ keyName, modifier }) => {
    return (
        <button className={`${styles.key} ${styles[modifier]}`}>
            {keyName}
        </button>
    )
}

export default Key
