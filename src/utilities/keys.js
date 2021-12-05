const Keys = [
    [
        { value: '`', eventCode: 'Backquote' },
        { value: '1', eventCode: 'Digit1' },
        { value: '2', eventCode: 'Digit2' },
        { value: '3', eventCode: 'Digit3' },
        { value: '4', eventCode: 'Digit4' },
        { value: '5', eventCode: 'Digit5' },
        { value: '6', eventCode: 'Digit6' },
        { value: '7', eventCode: 'Digit7' },
        { value: '8', eventCode: 'Digit8' },
        { value: '9', eventCode: 'Digit9' },
        { value: '0', eventCode: 'Digit0' },
        { value: '-', eventCode: 'Minus' },
        { value: '=', eventCode: 'Equal' },
        { value: 'DEL', eventCode: 'Delete' }
    ],
    [
        { value: 'Tab', eventCode: 'Tab', utility: true },
        { value: 'Q', eventCode: 'KeyQ' },
        { value: 'W', eventCode: 'KeyW' },
        { value: 'E', eventCode: 'KeyE' },
        { value: 'R', eventCode: 'KeyR' },
        { value: 'T', eventCode: 'KeyT' },
        { value: 'Y', eventCode: 'KeyY' },
        { value: 'U', eventCode: 'KeyU' },
        { value: 'I', eventCode: 'KeyI' },
        { value: 'O', eventCode: 'KeyO' },
        { value: 'P', eventCode: 'KeyP' },
        { value: '[', eventCode: 'BracketLeft' },
        { value: ']', eventCode: 'BracketRight' },
        { value: '\\', eventCode: 'Backslash' }
    ],
    [
        { value: 'CAPS', eventCode: 'CapsLock', utility: true },
        { value: 'A', eventCode: 'KeyA' },
        { value: 'S', eventCode: 'KeyS' },
        { value: 'D', eventCode: 'KeyD' },
        { value: 'F', eventCode: 'KeyF' },
        { value: 'G', eventCode: 'KeyG' },
        { value: 'H', eventCode: 'KeyH' },
        { value: 'J', eventCode: 'KeyJ' },
        { value: 'K', eventCode: 'KeyK' },
        { value: 'L', eventCode: 'KeyL' },
        { value: ';', eventCode: 'Semicolon' },
        { value: '\'', eventCode: 'Quote' },
        { value: 'ENTER', eventCode: 'Enter', utility: true },
    ],
    [
        { value: 'SHIFT', eventCode: 'ShiftLeft', utility: true },
        { value: 'Z', eventCode: 'KeyZ' },
        { value: 'X', eventCode: 'KeyX' },
        { value: 'C', eventCode: 'KeyC' },
        { value: 'V', eventCode: 'KeyV' },
        { value: 'B', eventCode: 'KeyB' },
        { value: 'N', eventCode: 'KeyN' },
        { value: 'M', eventCode: 'KeyM' },
        { value: ',', eventCode: 'Comma' },
        { value: '.', eventCode: 'Period' },
        { value: '/', eventCode: 'Slash' },
        { value: 'SHIFT', eventCode: 'ShiftRight', utility: true }
    ]
];

const length = Keys.reduce((count, row) => count + row.length, 0);

export { Keys, length };