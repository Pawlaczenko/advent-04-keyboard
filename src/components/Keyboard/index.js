import React from 'react'
import styles from './_Keyboard.module.scss';
import Key from '../Key';

const Keyboard = () => {
    const keys = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'DEL'],
    ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"],
    ["SHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "SHIFT"],
    ];

    return (
        <div className={styles.keyboard}>
            {
                keys.map(row => {
                    return <div className={styles.row}>
                        {
                            row.map(key => {
                                let modifier = (['TAB', 'ENTER', 'SHIFT', 'CAPS'].findIndex(x => x === key) === -1) ? "" : "utility"
                                return <Key keyName={key} modifier={modifier} />
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}

export default Keyboard
