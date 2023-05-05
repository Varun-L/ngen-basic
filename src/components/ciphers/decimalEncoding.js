import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

// Decimal Encoding is used to convert decimal numbers to Binary Numbers, HexaDecimal Numbers, Octal Numbers
export default function DecimalEncodingN({num}) {
    function encode(str) {
        str = parseInt(str)
        return str.toString(num);
      }
      
      function decode(bin_oct_hex) {
        return parseInt(bin_oct_hex, num);
      }
      
      return <CipherFactory encode={encode} decode={decode} />

};

