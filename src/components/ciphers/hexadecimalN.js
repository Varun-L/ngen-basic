import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function HexadecimalEncodingN() {
  function encode(str) {
    str = parseInt(str)
    return str.toString(16);
  }
  
  function decode(bin) {
    return parseInt(bin, 16);
  }

  return <CipherFactory encode={encode} decode={decode} />

};

