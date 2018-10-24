import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <Menu theme={'dark'} mode={'inline'} defaultOpenKeys={['frontend']}>
              <SubMenu key={'frontend'} title={'Front-Ends'}>
                <Item key={'atendimento'}><a href="/atendimento">Atendimento</a></Item>
                <Item key={'venda'}><a href="/venda">Venda</a></Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>          
            <Content>
              Body content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
