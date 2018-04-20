import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';

export default class App extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        {this.props.children}
      </Layout>
    );
  }

}
