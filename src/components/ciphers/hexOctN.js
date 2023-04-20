import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function HexOctN() {

  // Hex to Octal
  function hexToOct(hex) {
    let oct = "";
    for (let i = 0; i < hex.length; i++) {
      let dec = parseInt(hex[i], 16);
      let o = dec.toString(8);
      oct += o;
    }
    return oct;
  }
  // Octal to Hex
  function octToHex(oct) {
    let hex = "";
    for (let i = 0; i < oct.length; i++) {
      let dec = parseInt(oct[i], 8);
      let h = dec.toString(16);
      hex += h;
    }
    return hex;
  }


  return <CipherFactory encode={hexToOct} decode={octToHex} />
};