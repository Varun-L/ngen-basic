import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function LainAlphabetCipher() {
    // Encrypt function using the Latin alphabet
    function latinAlphabetEncrypt(plaintext, key) {
        // Convert plaintext to uppercase and remove non-alphabetic characters
        plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");

        let ciphertext = "";
        for (let i = 0; i < plaintext.length; i++) {
            // Get the character code of the current letter
            let charCode = plaintext.charCodeAt(i);
            // Subtract 65 to get the index of the letter in the alphabet (A=0, B=1, etc.)
            let index = charCode - 65;
            // Add the key value to the index
            index += key;
            // Wrap around if the index goes beyond Z (25)
            if (index > 25) {
                index -= 26;
            }
            // Convert the index back to a letter and add it to the ciphertext
            ciphertext += String.fromCharCode(index + 65);
        }
        return ciphertext;
    }

    // Decrypt function using the Latin alphabet
    function latinAlphabetDecrypt(ciphertext, key) {
        // Convert ciphertext to uppercase and remove non-alphabetic characters
        ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");

        let plaintext = "";
        for (let i = 0; i < ciphertext.length; i++) {
            // Get the character code of the current letter
            let charCode = ciphertext.charCodeAt(i);
            // Subtract 65 to get the index of the letter in the alphabet (A=0, B=1, etc.)
            let index = charCode - 65;
            // Subtract the key value from the index
            index -= key;
            // Wrap around if the index goes below A (0)
            if (index < 0) {
                index += 26;
            }
            // Convert the index back to a letter and add it to the plaintext
            plaintext += String.fromCharCode(index + 65);
        }
        return plaintext;
    }

    return <CipherFactory encode={latinAlphabetEncrypt} decode={latinAlphabetDecrypt} keyComponentA={1} />
};
