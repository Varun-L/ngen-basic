import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function Rot13Encoder() {

    function encode(text) {
        return text.replace(/[a-zA-Z]/g, function(c) {
          return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
      }
      
      function decode(text) {
        return text.replace(/[a-zA-Z]/g, function(c) {
          return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) - 13) ? c : c + 26);
        });
      }
      

      return <CipherFactory encode={encode} decode={decode} />
};
