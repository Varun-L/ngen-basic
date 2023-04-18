import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function BinaryEncodingN() {
    function encode(str) {
        str = parseInt(str)
        return str.toString(2);
      }
      
      function decode(bin) {
        return parseInt(bin, 2);
      }
      
      return <CipherFactory encode={encode} decode={decode} />

};

