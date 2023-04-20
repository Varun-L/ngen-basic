
import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function Polybius() {
    // Polybius Square cipher encryption function
    function polybiusSquareEncrypt(plaintext, key) {
        // Create a 5x5 polybius square grid
        const polybiusSquare = [
            ['A', 'B', 'C', 'D', 'E'],
            ['F', 'G', 'H', 'I', 'K'],
            ['L', 'M', 'N', 'O', 'P'],
            ['Q', 'R', 'S', 'T', 'U'],
            ['V', 'W', 'X', 'Y', 'Z']
        ];

        // Remove spaces and convert plaintext to uppercase
        plaintext = plaintext.replace(/\s/g, '').toUpperCase();

        // Initialize ciphertext variable
        let ciphertext = '';

        // Iterate over each character in the plaintext
        for (let i = 0; i < plaintext.length; i++) {
            let row, col;

            // Find the row and column of the current character in the polybius square
            for (let j = 0; j < 5; j++) {
                for (let k = 0; k < 5; k++) {
                    if (polybiusSquare[j][k] === plaintext[i]) {
                        row = j;
                        col = k;
                        break;
                    }
                }
            }

            // Add the corresponding key character to the ciphertext
            ciphertext += key[row] + key[col];
        }

        return ciphertext;
    }

    // Polybius Square cipher decryption function
    function polybiusSquareDecrypt(ciphertext, key) {
        // Create a 5x5 polybius square grid
        const polybiusSquare = [
            ['A', 'B', 'C', 'D', 'E'],
            ['F', 'G', 'H', 'I', 'K'],
            ['L', 'M', 'N', 'O', 'P'],
            ['Q', 'R', 'S', 'T', 'U'],
            ['V', 'W', 'X', 'Y', 'Z']
        ];

        // Remove spaces from the ciphertext
        ciphertext = ciphertext.replace(/\s/g, '');

        // Initialize plaintext variable
        let plaintext = '';

        // Iterate over every two characters in the ciphertext
        for (let i = 0; i < ciphertext.length; i += 2) {
            let row, col;

            // Find the row and column of the current ciphertext characters in the key
            for (let j = 0; j < key.length; j++) {
                if (key[j] === ciphertext[i]) {
                    row = j;
                }
                if (key[j] === ciphertext[i + 1]) {
                    col = j;
                }
            }

            // Add the corresponding plaintext character to the output
            plaintext += polybiusSquare[row][col];
        }

        return plaintext;
    }
    return <CipherFactory encode={polybiusSquareEncrypt} decode={polybiusSquareDecrypt} />
};