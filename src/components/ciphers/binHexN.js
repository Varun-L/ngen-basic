import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function BinHexN() {

  // Hex to Binary
  function hexToBin(hex) {
    let bin = "";
    for (let i = 0; i < hex.length; i++) {
      let dec = parseInt(hex[i], 16);
      let b = dec.toString(2);
      while (b.length < 4) {
        b = "0" + b;
      }
      bin += b;
    }
    return bin;
  }
  // Binary to Hex
  function binToHex(bin) {
    let hex = "";
    for (let i = 0; i < bin.length; i += 4) {
      let b = bin.slice(i, i + 4);
      let dec = parseInt(b, 2);
      let h = dec.toString(16);
      hex += h;
    }
    return hex;
  }


  return <CipherFactory encode={binToHex} decode={hexToBin} />
};