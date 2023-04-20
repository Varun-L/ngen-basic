
import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function RotationCipher() {
    function encryptRotation(text, key) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let ch = text.charAt(i);
            if (ch.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
                if (code >= 65 && code <= 90) {
                    ch = String.fromCharCode(((code - 65 + key) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    ch = String.fromCharCode(((code - 97 + key) % 26) + 97);
                }
            }
            result += ch;
        }
        return result;
    }

    function decryptRotation(text, key) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let ch = text.charAt(i);
            if (ch.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
                if (code >= 65 && code <= 90) {
                    ch = String.fromCharCode(((code - 65 - key + 26) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    ch = String.fromCharCode(((code - 97 - key + 26) % 26) + 97);
                }
            }
            result += ch;
        }
        return result;
    }
    return <CipherFactory encode={encryptRotation} decode={decryptRotation} keyComponentA={1} />
};