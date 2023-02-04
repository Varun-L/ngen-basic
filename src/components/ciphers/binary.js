import { Row } from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from '../ui/SmoothText';

export default function BinaryEncoding() {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');

    function encode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          result += str[i].charCodeAt(0).toString(2) + ' ';
        }
        return result;
      }
      
      function decode(bin) {
        let result = '';
        let binArray = bin.split(' ');
        for (let i = 0; i < binArray.length; i++) {
          result += String.fromCharCode(parseInt(binArray[i], 2));
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

