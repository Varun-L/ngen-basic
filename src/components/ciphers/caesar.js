import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function CaesarCipher(props) {

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



    return <CipherFactory encode={encode} decode={decode} keyComponentA={1} />
};

