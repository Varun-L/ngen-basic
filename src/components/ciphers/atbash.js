import { Row, Col } from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from '../ui/SmoothText';

export default function AtbashEncoder() {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');

    const encode = (text) => {
        let encoded = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                encoded += String.fromCharCode(155 - charCode);
            } else if (charCode >= 97 && charCode <= 122) {
                encoded += String.fromCharCode(219 - charCode);
            } else {
                encoded += text[i];
            }
        }
        return encoded;
    };

    const decode = (text) => {
        return encode(text);
    };

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

