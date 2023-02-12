import { Row, InputNumber } from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from './SmoothText';

/**
 * 
 * @param {Function} encode 
 * @param {Function} decode 
 * @param {number} keyComponent 
 * @returns 
 */
export default function CipherFactory({encode, decode, keyComponent}) {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');
    const [shift, setShift] = useState(0);


    const handleLeftTextChange = (event) => {
        console.log("Handle Left Text Change");
        setLeftText(event.target.value);
        setRightText(encode(event.target.value, shift));
    };

    const handleRightTextChange = (event) => {
        console.log("Handle Right Text Change");
        setRightText(event.target.value);
        setLeftText(decode(event.target.value, shift));
    };

    return (
        <>
           { keyComponent  && <Row style={{ display: 'flex', padding:'10px' }}>

                <InputNumber
                    style={{ flex: 0.5 }}
                    addonBefore="Key Value:"
                    placeholder="Shift value"
                    value={shift}
                    size={'large'}
                    onChange={(n) => setShift(Number(n))}
                />

            </Row>
            }
            <Row style={{ display: 'flex' }}>
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

