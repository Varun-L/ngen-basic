import ArithmeticQuiz from "./components/MathQuiz"
import Base64Converter from "./components/base64conv"
import Caesar from "./components/CaesarCip"
import React from 'react';
import { Layout, Menu } from 'antd';

const {Content, Footer } = Layout;

const App = () => {

  const items = [
    {
      label: 'Caesar',
      key: 'c',
    },
    {
      label: 'Math Quiz',
      key: 'm',
    },
    {
      label: 'Base 64 Converter',
      key: 'b',
    },
  ];
  const [current, setCurrent] = React.useState('c');
  const [comp,setComp] = React.useState(<Caesar />)
  
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    if(e.key === 'c'){
      setComp(<Caesar />)
    }else if(e.key ==='b'){
      setComp(<Base64Converter />)
    }else if(e.key ==='m'){
      setComp(<ArithmeticQuiz  duration={300000} />)
    }
  };

  return (
    <Layout >
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

      <Content style={{ padding: '50px' }}>
        <div>
          {comp}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}> - with Love from ICY Labs</Footer>
    </Layout>
  );
};


export default App;
