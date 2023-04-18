import { Row, InputNumber } from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from './SmoothText';

/**
 * 
 * @param {Function} encode 
 * @param {Function} decode 
 * @param {number} keyComponentA
 * @param {number} keyComponentB
 * @returns 
 */
export default function CipherFactory({ encode, decode, keyComponentA, keyComponentB }) {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');
    const [shift1, setShift1] = useState(0);
    const [shift2, setShift2] = useState(0);


    const handleLeftTextChange = (event) => {
        console.log("Handle Left Text Change");
        setLeftText(event.target.value);
        setRightText(encode(event.target.value, shift1, shift2));
    };

    const handleRightTextChange = (event) => {
        console.log("Handle Right Text Change");
        setRightText(event.target.value);
        setLeftText(decode(event.target.value, shift1, shift2));
    };

    return (
        <>
            {keyComponentA && <Row style={{ display: 'flex', padding: '10px' }}>

                <InputNumber
                    style={{ flex: 0.5 }}
                    addonBefore="Key Value:"
                    placeholder="Shift value"
                    value={shift1}
                    size={'large'}
                    onChange={(n) => setShift1(Number(n))}
                />

            </Row>
            }
            {keyComponentB && <Row style={{ display: 'flex', padding: '10px' }}>

                <InputNumber
                    style={{ flex: 0.5 }}
                    addonBefore="Key B Value:"
                    placeholder="Shift value"
                    value={shift2}
                    size={'large'}
                    onChange={(n) => setShift2(Number(n))}
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

