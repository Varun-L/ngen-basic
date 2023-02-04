// import ArithmeticQuiz from "./components/MathQuiz"
// import Base64Converter from "./components/base64conv"
import AtbashCipher from "./components/ciphers/atbash";
import CaesarCipher from "./components/ciphers/caesar";
import Rot13Encoder from "./components/ciphers/rot13";
import AsciiCipher from "./components/ciphers/ascii";
import A1Z26Cipher from "./components/ciphers/a1z26";

import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import MorseCode from "./components/ciphers/morse";
import BinaryEncoding from "./components/ciphers/binary";
import OctalEncoding from "./components/ciphers/octal";
import HexadecimalEncoding from "./components/ciphers/hexadecimal";


const {Content, Footer } = Layout;
const {Title} = Typography;

const App = () => {

const items=[['Caesar Cipher', <CaesarCipher />],
// ['Math Quiz','m'],['Base 64 Converter','b'],
['Atbash Cipher',<AtbashCipher />],
['Rot13 Cipher', <Rot13Encoder />],
['A1Z26 Cipher', <A1Z26Cipher />],
['ASCII Cipher', <AsciiCipher />],
['Morse Code', <MorseCode />],
['Binary Conversion', <BinaryEncoding />],
['Octal Conversion', <OctalEncoding />],
['Hexa Decimal Conversion', <HexadecimalEncoding />],
]
  
  const [current, setCurrent] = React.useState('');
  const [comp,setComp] = React.useState(<></>)
  const [title,setTitle] = React.useState('');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    let k = Number(e.key);
    // let comp, title;
    // switch(e.key){
    //   case 'c': comp = <CaesarCipher />; title='Caesar Cipher'; break;
    //   case 'b': comp = <Base64Converter />; break;
    //   case 'm': comp = <ArithmeticQuiz  duration={300000} />; break;
    //   case 'a': comp = <AtbashCipher />; title='Atbash Cipher';  break;
    //   default: comp = <> ICY LABS Exploded. </>; title=''; 
    // }
    setComp(items[k][1]); setTitle(items[k][0]);
  };

  return (
    <Layout >
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items.map((ele, index)=>({label:ele[0],key:index}))} />
      <Content style={{ padding: '50px' }}>
        <Title>{title}</Title>
        <div>
          {comp}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}> - with Love from ICY Labs</Footer>
    </Layout>
  );
};


export default App;
