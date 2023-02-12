import React from "react";
import CipherFactory from "../ui/EncryptDecrypt";
export default function OctalEncoding() {
 
    function encode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          result += str[i].charCodeAt(0).toString(8) + ' ';
        }
        return result;
      }
      
      function decode(oct) {
        let result = '';
        let octArray = oct.split(' ');
        for (let i = 0; i < octArray.length; i++) {
          result += String.fromCharCode(parseInt(octArray[i], 8));
        }
        return result;
      }
      
      return <CipherFactory encode={encode} decode={decode} />
};

