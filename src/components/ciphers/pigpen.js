
import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function PigPen() {
  // Encrypt using PigPen Cipher
  function pigpenEncrypt(plainText) {
    const alphabet = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i', 'k'],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z']
    ];
    let cipherText = '';
    for (let i = 0; i < plainText.length; i++) {
      let char = plainText[i].toLowerCase();
      let row, col;
      if (char >= 'a' && char <= 'z') {
        row = Math.floor((char.charCodeAt(0) - 'a'.charCodeAt(0)) / 5);
        col = (char.charCodeAt(0) - 'a'.charCodeAt(0)) % 5;
        cipherText += alphabet[row][col];
      } else {
        cipherText += char;
      }
    }
    return cipherText;
  }

  // Decrypt using PigPen Cipher
  function pigpenDecrypt(cipherText) {
    const alphabet = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i', 'k'],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z']
    ];
    let plainText = '';
    for (let i = 0; i < cipherText.length; i++) {
      let char = cipherText[i].toLowerCase();
      let row, col;
      if (char >= 'a' && char <= 'z') {
        for (row = 0; row < 5; row++) {
          col = alphabet[row].indexOf(char);
          if (col !== -1) {
            break;
          }
        }
        plainText += String.fromCharCode('a'.charCodeAt(0) + row * 5 + col);
      } else {
        plainText += char;
      }
    }
    return plainText;
  }

  return <CipherFactory encode={pigpenEncrypt} decode={pigpenDecrypt} />
};