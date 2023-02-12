import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function BinaryEncoding() {
    function encode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          result += str[i].charCodeAt(0).toString(2) + ' ';
        }
        return result;
      }
      
      function decode(bin) {
        let result = '';
        let binArray = bin.split(' ');
        for (let i = 0; i < binArray.length; i++) {
          result += String.fromCharCode(parseInt(binArray[i], 2));
        }
        return result;
      }
      
      return <CipherFactory encode={encode} decode={decode} />

};

