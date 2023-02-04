import { Row, InputNumber } from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from '../ui/SmoothText';

export default function CaesarCipher(props) {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');
    const [shift, setShift] = useState(0);


    // Create a function to encode a string using the Caesar cipher
    function encode(str, shift) {
        // Create an array of the characters in the string
        const chars = str.split('');

        // Shift each character by the specified number of positions
        const encodedChars = chars.map((char) => {
            const charCode = char.charCodeAt(0);
            let newCharCode = charCode + shift;
            if (charCode >= 65 && charCode <= 90) {
                // Handle uppercase characters
                if (newCharCode < 65) {
                    newCharCode = 90 - (65 - newCharCode - 1);
                } else if (newCharCode > 90) {
                    newCharCode = 65 + (newCharCode - 90 - 1);
                }
            } else if (charCode >= 97 && charCode <= 122) {
                // Handle lowercase characters
                if (newCharCode < 97) {
                    newCharCode = 122 - (97 - newCharCode - 1);
                } else if (newCharCode > 122) {
                    newCharCode = 97 + (newCharCode - 122 - 1);
                }
            }
            return String.fromCharCode(newCharCode);
        });

        // Return the encoded string
        return encodedChars.join('');
    }

    // Create a function to decode a string using the Caesar cipher
    function decode(str, shift) {
        // Encode the string with a negative shift to reverse the original shift
        return encode(str, -shift);
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

