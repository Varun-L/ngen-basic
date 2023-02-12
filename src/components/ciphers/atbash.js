import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function AtbashEncoder() {

    const encode = (text) => {
        let encoded = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                encoded += String.fromCharCode(155 - charCode);
            } else if (charCode >= 97 && charCode <= 122) {
                encoded += String.fromCharCode(219 - charCode);
            } else {
                encoded += text[i];
            }
        }
        return encoded;
    };

    const decode = (text) => {
        return encode(text);
    };

    return <CipherFactory encode={encode} decode={decode} />

};

