
import { Row} from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from '../ui/SmoothText';

export default function Rot13Encoder() {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');

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
