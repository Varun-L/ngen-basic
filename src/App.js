// import ArithmeticQuiz from "./components/MathQuiz"
// import Base64Converter from "./components/base64conv"
import React, { useState } from "react";
import {
  Layout,
  Menu,
  Typography,
  Watermark,
  Spin,
} from "antd";
import AtbashCipher from "./components/ciphers/atbash";
import CaesarCipher from "./components/ciphers/caesar";
import Rot13Encoder from "./components/ciphers/rot13";
import AsciiCipher from "./components/ciphers/ascii";
import A1Z26Cipher from "./components/ciphers/a1z26";
import A0Z25Cipher from "./components/ciphers/a0z25";
import MorseCode from "./components/ciphers/morse";
import BinaryEncoding from "./components/ciphers/binary";
import OctalEncoding from "./components/ciphers/octal";
import HexadecimalEncoding from "./components/ciphers/hexadecimal";
import DecimalEncodingN from "./components/ciphers/decimalEncoding";
import Base64Encoding from "./components/ciphers/b64";
import OneTimePadEncN from "./components/ciphers/oneTimePadN";
import AffineCipher from "./components/ciphers/affine";
import BinaryEncodedDecimalN from "./components/ciphers/bcd";
import GrayCode from "./components/ciphers/gray";
import UrlEncodingDecoding from "./components/ciphers/urled";
import BaconianCipher from "./components/ciphers/baconian";
import BinHexN from "./components/ciphers/binHexN";
import BinOctN from "./components/ciphers/binOctN";
import HexOctN from "./components/ciphers/hexOctN";
import LatinAlphabetCipher from "./components/ciphers/latinAlphabet";
import Scytale from "./components/ciphers/scytale";
import PigPen from "./components/ciphers/pigpen";
import ReverseCode from "./components/ciphers/reverseCode";
import RotationCipher from "./components/ciphers/rotationCipher";
import RomanCode from "./components/ciphers/romanCode";
import Vigenere from "./components/ciphers/vigenere";

const { Content, Footer, Header } = Layout;

const App = () => {
  const [isVerified, setIsVerified] = useState(false);
  // const checkPw = () => {
  //   const answer = document.getElementById("password").value;

  //   if (answer === "I_KNOW_YOU") {
  //     setIsVerified(true);
  //   } else {
  //     alert("Sorry, that's not it");
  //   }
  // };
  const items = [
    ["Caesar Cipher", <CaesarCipher />],
    ["Atbash Cipher", <AtbashCipher />],
    ["Rot13 Cipher", <Rot13Encoder />],
    ["A1Z26 Cipher", <A1Z26Cipher />],
    ["A0Z25 Cipher", <A0Z25Cipher />],
    ["Vigenere Cipher", <Vigenere />],
    ["ASCII Cipher", <AsciiCipher />],
    ["Morse Code", <MorseCode />],
    ["Binary Conversion", <BinaryEncoding />],
    ["Octal Conversion", <OctalEncoding />],
    ["Hexa Decimal Conversion", <HexadecimalEncoding />],
    ["Base64 Encoding", <Base64Encoding />],
    ["One time Pad Encoding", <OneTimePadEncN />],
    ["Affine Cipher", <AffineCipher />],
    ["BCD", <BinaryEncodedDecimalN />],
    ["Dec 2 Binary", <DecimalEncodingN num={2} />],
    ["Dec 2 Octal", <DecimalEncodingN num={8} />],
    ["Dec 2 Hexadecimal", <DecimalEncodingN num={16} />],
    ["Gray Code", <GrayCode />],
    ["URL Encoding and Decoding", <UrlEncodingDecoding />],
    ["Baconian Cipher", <BaconianCipher />],
    ["Bin2Hex Numbers", <BinHexN />],
    ["Bin2Oct Numbers", <BinOctN />],
    ["Hex2Oct Numbers", <HexOctN />],
    ["Latin Alphabet Cipher", <LatinAlphabetCipher />],
    ["PigPen Cipher", <PigPen />],
    ["Reverse Code", <ReverseCode />],
    ["Rotation Cipher", <RotationCipher />],
    ["Roman Code", <RomanCode />],
    ["Scytale Cipher", <Scytale />],
  ];

  const [current, setCurrent] = React.useState("");
  const [comp, setComp] = React.useState(<></>);
  // const [title, setTitle] = React.useState("");
  // const [isOpen, setIsOpen] = useState(false);

  const onClick = (e) => {
    setCurrent(e.key);
    let k = Number(e.key);
    setComp(items[k][1]);
    setTitle(items[k][0]);
  };

  return (
    <>
      <Layout>
        <Header style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
          {" "}
          EN | CRYPTO | DE <Spin /> PlayGround{" "}
        </Header>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items.map((ele, index) => ({ label: ele[0], key: index }))}
        />
        <Watermark content="ICY Labs">
          {current && (
            <Content style={{ padding: "50px" }}>
              <div>{comp}</div>
            </Content>
          )}
          <Footer style={{ textAlign: "center" }}>
            {" "}
            - with Love from ZBST
          </Footer>
        </Watermark>
      </Layout>
    </>
  );
};

export default App;

/**

    // {isVerified ? 
   // (
     <Layout >
    <Header style={{textAlign: 'center',color: '#fff', fontSize: 16}}> EN | CRYPTO | DE  <Spin /> PlayGround </Header>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items.map((ele, index) => ({ label: ele[0], key: index }))} />
    <Watermark content="ICY Labs">
      <Content style={{ padding: '50px' }}>
        <Title style={{ textAlign: 'center' }} underline level={1} type={lodash.sample(['danger', 'success', 'warning'])} >{title}</Title>
        <div>
          {comp}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}> - with Love from ZBST</Footer>
    </Watermark>
  </Layout>
    // )
  // :     (
  //   <div>
  //   <Input.Password id="password" name="password" size="large" placeholder="Enter password" prefix={<EyeOutlined />} />
  //   <Button type="primary" onClick={checkPw}>Open Lock</Button>
  //   </div>
  // )
  // }

 */
