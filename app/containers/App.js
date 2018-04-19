import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';

export default class App extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout.Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children}
          </div>
        </Layout.Content>
      </Layout>
    );
  }

}
