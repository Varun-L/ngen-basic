import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function GrayCode() {

// Function to encode decimal to gray code
function decimalToGray(decimal) {
  return decimal ^ (decimal >> 1);
}

// Function to decode gray code to decimal
function grayToDecimal(gray) {
  let decimal = gray;
  while (gray >> 1) {
    decimal ^= gray >> 1;
    gray >>= 1;
  }
  return decimal;
}

  return <CipherFactory encode={decimalToGray} decode={grayToDecimal} />
};
