import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function OneTimePadEnc() {

  function encode(msg, key) {
    if (msg < 0 || key < 0) {
      throw new Error('Message and key must be non-negative integers.');
    }
  
    const msgStr = msg.toString(2);
    const keyStr = key.toString(2);
    const padLength = Math.max(msgStr.length, keyStr.length);
    const paddedMsg = msgStr.padStart(padLength, '0');
    const paddedKey = keyStr.padStart(padLength, '0');
  
    let result = '';
    for (let i = 0; i < padLength; i++) {
      const msgBit = paddedMsg[i];
      const keyBit = paddedKey[i];
      const xorBit = msgBit ^ keyBit;
      result += xorBit;
    }
  
    return parseInt(result, 2);
  }
  
  function decode(encoded, key) {
    return encode(encoded, key);
  }
  

      return <CipherFactory encode={encode} decode={decode} keyComponentA={1} />
};