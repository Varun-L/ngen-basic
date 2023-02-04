
import { Row} from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from '../ui/SmoothText';

export default function AsciiCipher() {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');

// Encode a string using ASCII cipher
function encode(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      result += str.charCodeAt(i).toString(16).toUpperCase() + '-';
    }
    return result;
  }
  
  // Decode a string using ASCII cipher
  function decode(str) {
    var result = '';
    var elements = str.split('-');
    for (var i = 0; i < elements.length; i++) {
      result += String.fromCharCode(parseInt(elements[i], 16));
    }
    return result;
  }      

    const handleLeftTextChange = (event) => {
        console.log("Handle Left Text Change");
        setLeftText(event.target.value);
        setRightText(encode(event.target.value));
    };

    const handleRightTextChange = (event) => {
        console.log("Handle Right Text Change");
        setRightText(event.target.value);
        setLeftText(decode(event.target.value));
    };

    return (
        <>
        <Row style={{display:'flex'}}>
                <SmoothTextInput
                    value={leftText}
                    isLeft={true}
                    onChange={handleLeftTextChange}
                    placeholder="Enter text to Encrypt"
                />
                <SmoothTextInput
                    value={rightText}
                    isLeft={false}
                    onChange={handleRightTextChange}
                    placeholder="Enter text to Decrypt"
                />
        </Row>
        </>
        
    );
};