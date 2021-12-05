import React, { useState, useEffect } from 'react'
import styles from './_Keyboard.module.scss';
import Key from '../Key';
import { Keys, length } from '../../utilities/keys.js';

const Keyboard = () => {

    const getRandomKey = () => {
        let row = Math.floor(Math.random() * 4);
        let column = Math.floor(Math.random() * Keys[row].length);
        return Keys[row][column].eventCode;
    }

    const [crazyKey, changeCrazyKey] = useState(getRandomKey());
    const [score, updateScore] = useState(0);

    const pickNewKey = () => {
        updateScore(score + 1);
        changeCrazyKey(getRandomKey());
    }

    useEffect(() => {
        const checkCrazyKey = (e) => {
            if (e.code === crazyKey) pickNewKey();
        }

        document.addEventListener('keydown', checkCrazyKey);

        return () => { document.removeEventListener('keydown', checkCrazyKey) }
    })

    return (
        <>
            <div className={styles.keyboard}>
                <div className={styles.scoreBoard}>Score: {score}</div>
                {
                    Keys.map(row => {
                        return <div className={styles.row}>
                            {
                                row.map(key => {
                                    return <Key key={key.eventCode} keyName={key.value} keyCode={key.eventCode} modifier={key.utility} isJiggling={key.eventCode === crazyKey} />
                                })
                            }
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Keyboard
