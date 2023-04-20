import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function Scytale() {
    // Function to encrypt plaintext using Scytale cipher
    function scytaleEncrypt(plaintext, key) {
        // Remove all spaces and convert plaintext to uppercase
        plaintext = plaintext.replace(/\s/g, '').toUpperCase();

        // Calculate the number of columns based on the length of the key
        const numColumns = Math.ceil(plaintext.length / key);

        // Add padding to the plaintext if necessary
        const paddingLength = numColumns * key - plaintext.length;
        plaintext = plaintext.padEnd(plaintext.length + paddingLength, 'X');

        // Create the matrix to hold the plaintext
        const matrix = [];
        let currentRow = 0;
        for (let i = 0; i < plaintext.length; i += key) {
            matrix[currentRow] = plaintext.slice(i, i + key);
            currentRow++;
        }

        // Transpose the matrix
        const transposedMatrix = [];
        for (let i = 0; i < key; i++) {
            transposedMatrix[i] = '';
            for (let j = 0; j < numColumns; j++) {
                transposedMatrix[i] += matrix[j][i];
            }
        }

        // Flatten the transposed matrix into a single string to get the ciphertext
        let ciphertext = '';
        for (let i = 0; i < key; i++) {
            ciphertext += transposedMatrix[i];
        }

        return ciphertext;
    }

    // Function to decrypt ciphertext using Scytale cipher
    function scytaleDecrypt(ciphertext, key) {
        // Calculate the number of columns based on the length of the key
        const numColumns = Math.ceil(ciphertext.length / key);

        // Create the matrix to hold the ciphertext
        const matrix = [];
        let currentRow = 0;
        for (let i = 0; i < ciphertext.length; i += numColumns) {
            matrix[currentRow] = ciphertext.slice(i, i + numColumns);
            currentRow++;
        }

        // Transpose the matrix
        const transposedMatrix = [];
        for (let i = 0; i < numColumns; i++) {
            transposedMatrix[i] = '';
            for (let j = 0; j < key; j++) {
                transposedMatrix[i] += matrix[j][i];
            }
        }

        // Flatten the transposed matrix into a single string to get the plaintext
        let plaintext = '';
        for (let i = 0; i < numColumns; i++) {
            plaintext += transposedMatrix[i];
        }

        // Remove any padding
        plaintext = plaintext.replace(/X+$/, '');

        return plaintext;
    }

    return <CipherFactory encode={scytaleEncrypt} decode={scytaleDecrypt} keyComponentA={1} />
};