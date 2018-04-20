import React from 'react';
import { Layout } from 'antd';

const styles = {

  wrapper: {
    height: '100vh',
    position: 'relative'
  },

  header: {
    display:'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid #CCC',
    position: 'absolute',
    height:'50px',
    top: 0,
    left: 0,
    right: 0,
    padding: 8
  },

  body: {
    position: 'absolute',
    padding:15,
    top: 50,
    bottom:0,
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    overflow: 'auto'
  }

};

const PageWrapper = ({children}) =>
  <Layout.Content style={styles.wrapper}>
    {children}
  </Layout.Content>

const PageHeader = ({children}) =>
  <div style={styles.header}>
    {children}
  </div>

const PageBody = ({children}) =>
  <div style={styles.body}>
    {children}
  </div>


export { PageWrapper, PageHeader, PageBody };
