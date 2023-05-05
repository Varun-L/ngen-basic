import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function AffineCipher() {

    // Function to encrypt a message using the affine cipher
    function encryptAffine(message, a, b) {
        // Convert message to uppercase and remove all spaces and special characters
        message = message.toUpperCase().replace(/[^A-Z]/g, '');
        let result = '';

        // Iterate through each character in the message
        for (let i = 0; i < message.length; i++) {
            let charCode = message.charCodeAt(i) - 65;  // Convert character to number between 0 and 25
            let encryptedCharCode = (a * charCode + b) % 26;  // Apply the affine cipher formula
            let encryptedChar = String.fromCharCode(encryptedCharCode + 65);  // Convert encrypted number back to character
            result += encryptedChar;  // Add encrypted character to result string
        }

        return result;
    }

    // Function to decrypt a message using the affine cipher
    function decryptAffine(ciphertext, a, b) {
        let result = '';

        // Find the modular multiplicative inverse of a
        let aInverse = -1;
        for (let i = 0; i < 26; i++) {
            if ((i * a) % 26 === 1) {
                aInverse = i;
                break;
            }
        }

        // Iterate through each character in the ciphertext
        for (let i = 0; i < ciphertext.length; i++) {
            let charCode = ciphertext.charCodeAt(i) - 65;  // Convert character to number between 0 and 25
            let decryptedCharCode = (aInverse * (charCode - b + 26)) % 26;  // Apply the affine cipher formula
            let decryptedChar = String.fromCharCode(decryptedCharCode + 65);  // Convert decrypted number back to character
            result += decryptedChar;  // Add decrypted character to result string
        }

        return result;
    }


    return <CipherFactory encode={encryptAffine} decode={decryptAffine} keyComponentA={1} keyComponentB={1} />
};