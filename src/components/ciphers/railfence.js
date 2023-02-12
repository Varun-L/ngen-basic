
import { Row, InputNumber} from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from '../ui/SmoothText';

export default function RailFenceCipher() {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');
    const [shift, setShift] = useState(0);


    // Encode function for rail fence cipher
    function encode(plainText, key) {
    // Create a matrix to store the encrypted text
    let matrix = [];
    for (let i = 0; i < key; i++) {
    matrix[i] = [];
    }
    
    // Fill the matrix with the plain text
    let row = 0;
    let direction = 1;
    for (let i = 0; i < plainText.length; i++) {
    matrix[row].push(plainText[i]);
    if (row === key - 1) {
    direction = -1;
    } else if (row === 0) {
    direction = 1;
    }
    row += direction;
    }
    
    // Read the matrix to get the encrypted text
    let encryptedText = '';
    for (let i = 0; i < key; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    encryptedText += matrix[i][j];
    }
    }
    console.log(encryptedText)
    console.log(matrix)
    return encryptedText;
    }
    
    // Decode function for rail fence cipher
    function decode(encryptedText, key) {
    // Create a matrix to store the decrypted text
    let matrix = [];
    for (let i = 0; i < key; i++) {
    matrix[i] = [];
    for (let j = 0; j < encryptedText.length; j++) {
    matrix[i][j] = 'x';
    }
    }
    
    // Fill the matrix with the encrypted text
    let row = 0;
    let direction = 1;
    let index = 0;
    while (index < encryptedText.length) {
    matrix[row][index] = encryptedText[index];
    if (row === key - 1) {
    direction = -1;
    } else if (row === 0) {
    direction = 1;
    }
    row += direction;
    index++;
    }
    
    // Get the decrypted text by reading the matrix
    let decryptedText = '';
    row = 0;
    direction = 1;
    for (let i = 0; i < encryptedText.length; i++) {
    decryptedText += matrix[row][i];
    if (row === key - 1) {
    direction = -1;
    } else if (row === 0) {
    direction = 1;
    }
    row += direction;
    }
    
    return decryptedText;
    }

    const handleLeftTextChange = (event) => {
        console.log("Handle Left Text Change");
        setLeftText(event.target.value);
        setRightText(encode(event.target.value, shift));
    };
    const handleRightTextChange = (event) => {
        console.log("Handle Right Text Change");
        setRightText(event.target.value);
        setLeftText(decode(event.target.value, shift));
    };

    return (
        <>
        <Row style={{ display: 'flex', padding:'10px' }}>

            <InputNumber
                style={{ flex: 0.5 }}
                addonBefore="Key Value:"
                placeholder="Shift value"
                value={shift}
                size={'large'}
                onChange={(n) => setShift(Number(n))}
            />

        </Row>

        <Row style={{ display: 'flex' }}>
            <SmoothTextInput
                value={leftText}
                isLeft={true}
                onChange={handleLeftTextChange}
                placeholder="Enter text to Encrypt"
            />
            <SmoothTextInput
                value={rightText}
                isLeft={false}
                onChange={handleRightTextChange}
                placeholder="Enter text to Decrypt"
            />
        </Row>

    </>
        
    );
};