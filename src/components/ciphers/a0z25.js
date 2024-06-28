import React, {useState} from "react";
import CipherFactory from "../ui/EncryptDecrypt";
import CipherOverview from "../ui/CipherOverview";

export default function A0Z25Cipher() {
  const [showOverview, setShowOverview] = useState(false);

  function encode(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      result += str.charCodeAt(i) - 65 + "-";
    }
    return result;
  }

  // Decode a string using A1Z26 cipher
  function decode(str) {
    var result = "";
    var elements = str.split("-");
    for (var i = 0; i < elements.length; i++) {
      result += String.fromCharCode(parseInt(elements[i]) + 65);
    }
    return result;
  }

  return (
    <>
      {/* {showOverview && (
        <CipherOverview
          setShowOverview={setShowOverview}
          Header={Header}
          Description={Description}
          Example={Example}
          References={References}
        />
      )} */}
      <CipherFactory
        title={"A0Z25 Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
      />
    </>
  );
}
