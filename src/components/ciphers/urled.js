import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function UrlEncodingDecoding() {

  function encode(str) {
    return encodeURIComponent(str);
  }
  
  function decode(str) {
    return decodeURIComponent(str);
  }
  return <CipherFactory encode={encode} decode={decode} />
};
