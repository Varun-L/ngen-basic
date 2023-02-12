import CipherFactory from "../ui/EncryptDecrypt";
import React from "react";

export default function MorseCode() {
    // Encode a string using Morse code
function encode(str) {

    const MORSE_CODE={a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."};
    str = str.toLowerCase();
    var result = '';
    for (var i = 0; i < str.length ; i++) {
      if(str.charAt(i) in MORSE_CODE){
        result += MORSE_CODE[str.charAt(i)] + ' ';
      }
    }
    return result;
  }
  
  // Decode a string using Morse code
  function decode(str) {
    str = str.toLowerCase();
    const MORSE_CODE_KEYS = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z"
      };
    var result = '';
    var elements = str.split(' ');
    for (var i = 0; i < elements.length; i++) {
      if(elements[i] in MORSE_CODE_KEYS){
        result += MORSE_CODE_KEYS[elements[i]] + ' ';
      }
    }
    return result;
  }
  return <CipherFactory encode={encode} decode={decode} />
};

