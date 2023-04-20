
import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function RomanCode() {
  // Function to encrypt using Roman Code
  function encryptRoman(plainText) {
    const romanNumerals = {
      A: "I",
      B: "II",
      C: "III",
      D: "IV",
      E: "V",
      F: "VI",
      G: "VII",
      H: "VIII",
      I: "IX",
      J: "X",
      K: "XI",
      L: "XII",
      M: "XIII",
      N: "XIV",
      O: "XV",
      P: "XVI",
      Q: "XVII",
      R: "XVIII",
      S: "XIX",
      T: "XX",
      U: "XXI",
      V: "XXII",
      W: "XXIII",
      X: "XXIV",
      Y: "XXV",
      Z: "XXVI"
    };
    let cipherText = "";
    for (let i = 0; i < plainText.length; i++) {
      const char = plainText[i].toUpperCase();
      if (romanNumerals[char]) {
        cipherText += romanNumerals[char];
      } else {
        cipherText += char;
      }
    }
    return cipherText;
  }

  // Function to decrypt using Roman Code
  function decryptRoman(cipherText) {
    const romanNumerals = {
      I: "A",
      II: "B",
      III: "C",
      IV: "D",
      V: "E",
      VI: "F",
      VII: "G",
      VIII: "H",
      IX: "I",
      X: "J",
      XI: "K",
      XII: "L",
      XIII: "M",
      XIV: "N",
      XV: "O",
      XVI: "P",
      XVII: "Q",
      XVIII: "R",
      XIX: "S",
      XX: "T",
      XXI: "U",
      XXII: "V",
      XXIII: "W",
      XXIV: "X",
      XXV: "Y",
      XXVI: "Z"
    };
    let plainText = "";
    let numeral = "";
    for (let i = 0; i < cipherText.length; i++) {
      const char = cipherText[i].toUpperCase();
      if (char >= "A" && char <= "Z") {
        if (numeral !== "") {
          plainText += romanNumerals[numeral];
          numeral = "";
        }
        plainText += char;
      } else {
        numeral += char;
      }
    }
    if (numeral !== "") {
      plainText += romanNumerals[numeral];
    }
    return plainText;
  }
  return <CipherFactory encode={encryptRoman} decode={decryptRoman} />
};