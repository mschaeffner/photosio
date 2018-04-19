import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';

export default class App extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout.Content style={{ padding: 10, marginLeft: 200, backgroundColor: '#fff' }}>
          {this.props.children}
        </Layout.Content>
      </Layout>
    );
  }

}
