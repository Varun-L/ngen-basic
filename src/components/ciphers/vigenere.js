import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function VigenereCipher() {
 
    function generateKey(input, key) {
        let keyArray = Array.from(key);
        while (keyArray.length < input.length) {
            keyArray = [...keyArray, ...keyArray];
        }
        return keyArray.slice(0, input.length).join('');
    }
    
    function vigenereCipherEncrypt(input, key) {
        if(!input) return
        if(!key) return
        const inputUpper = input?.toUpperCase();
        const keyUpper = generateKey(inputUpper, key?.toUpperCase());
        let output = '';
        for (let i = 0; i < inputUpper.length; i++) {
            if (inputUpper[i] >= 'A' && inputUpper[i] <= 'Z') {
                output += String.fromCharCode((inputUpper.charCodeAt(i) - 65 + keyUpper.charCodeAt(i) - 65) % 26 + 65);
            } else {
                output += inputUpper[i];
            }
        }
        return output;
    }
    
    function vigenereCipherDecrypt(input, key) {
        if(!input) return
        if(!key) return
        const inputUpper = input.toUpperCase();
        const keyUpper = generateKey(inputUpper, key.toUpperCase());
        let output = '';
        for (let i = 0; i < inputUpper.length; i++) {
            if (inputUpper[i] >= 'A' && inputUpper[i] <= 'Z') {
                output += String.fromCharCode((inputUpper.charCodeAt(i) - keyUpper.charCodeAt(i) + 26) % 26 + 65);
            } else {
                output += inputUpper[i];
            }
        }
        return output;
    }


    return <CipherFactory encode={vigenereCipherEncrypt} decode={vigenereCipherDecrypt} keyComponentA={'STR'}/>
};