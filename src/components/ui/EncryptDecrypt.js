import { Row, InputNumber } from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from './SmoothText';

/**
 * 
 * @param {encode,decode} props 
 * @returns 
 */
export default function CipherFactory(props) {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');
    const [shift, setShift] = useState(0);


    const handleLeftTextChange = (event) => {
        console.log("Handle Left Text Change");
        setLeftText(event.target.value);
        setRightText(props.encode(event.target.value, shift));
    };

    const handleRightTextChange = (event) => {
        console.log("Handle Right Text Change");
        setRightText(event.target.value);
        setLeftText(props.decode(event.target.value, shift));
    };

    return (
        <>
           { props.key  && <Row style={{ display: 'flex', padding:'10px' }}>

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

