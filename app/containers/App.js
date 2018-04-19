import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';

export default class App extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Layout.Content style={{ padding: 10, backgroundColor: '#fff' }}>
          {this.props.children}
        </Layout.Content>
      </Layout>
    );
  }

}
