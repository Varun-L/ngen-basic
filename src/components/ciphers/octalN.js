import React from "react";
import CipherFactory from "../ui/EncryptDecrypt";
export default function OctalEncodingN() {
 
  function encode(str) {
    str = parseInt(str)
    return str.toString(8);
  }
  
  function decode(bin) {
    return parseInt(bin, 8);
  }
      return <CipherFactory encode={encode} decode={decode} />
};

