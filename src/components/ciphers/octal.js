import { Row } from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from '../ui/SmoothText';

export default function OctalEncoding() {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');

 
    function encode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          result += str[i].charCodeAt(0).toString(8) + ' ';
        }
        return result;
      }
      
      function decode(oct) {
        let result = '';
        let octArray = oct.split(' ');
        for (let i = 0; i < octArray.length; i++) {
          result += String.fromCharCode(parseInt(octArray[i], 8));
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

