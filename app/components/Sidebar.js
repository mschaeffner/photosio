import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const links = [
  { name: 'Photos', href: '/photos', icon:'appstore-o' },
  { name: 'Collections', href: '/collections', icon:'folder-open' },
  { name: 'Imports', href: '/imports', icon:'download' },
  { name: 'Backups', href: '/backups', icon:'sync' }
];

class Sidebar extends React.Component {

  state = {
    collapsed: false
  };

  onCollapse(collapsed) {
    this.setState({ collapsed });
  }

  onSelect({ item, key }) {
    this.props.history.push(key);
  }

  render() {
    return(
      <Layout.Sider
        style={{ overflow: 'auto', height: '100vh'}}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={(collapsed) => this.onCollapse(collapsed)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={[ links[0].href ]}
          mode="inline"
          onSelect={({item, key}) => this.onSelect({item, key})}
        >
          {links.map(link =>
            <Menu.Item key={link.href}>
              <Icon type={link.icon} />
              <span>{link.name}</span>
            </Menu.Item>
          )}
        </Menu>
      </Layout.Sider>
    );
  }
}

export default withRouter(Sidebar);
