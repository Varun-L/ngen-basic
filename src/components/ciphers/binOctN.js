import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function BinOctN() {

    // Binary to Octal
    function binToOct(bin) {
        let oct = "";
        let b = bin;
        while (b.length % 3 !== 0) {
            b = "0" + b;
        }
        for (let i = 0; i < b.length; i += 3) {
            let t = b.slice(i, i + 3);
            let dec = parseInt(t, 2);
            let o = dec.toString(8);
            oct += o;
        }
        return oct;
    }
    // Octal to Binary
    function octToBin(oct) {
        let bin = "";
        for (let i = 0; i < oct.length; i++) {
            let dec = parseInt(oct[i], 8);
            let b = dec.toString(2);
            while (b.length < 3) {
                b = "0" + b;
            }
            bin += b;
        }
        return bin;
    }


    return <CipherFactory encode={binToOct} decode={octToBin} />
};