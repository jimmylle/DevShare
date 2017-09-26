import React from 'react';
import { Navigation } from 'react-toolbox/lib/navigation';
import styles from '../styles/navbar';

class Navbar extends React.Component {
  render() {
    const actions = [
      {label: 'About', icon: 'info', flat: true, theme: styles},
      {label: 'Create Room', icon: 'chat_bubble', flat: true, theme: styles},
    ];

    return (
      <Navigation type='horizontal' actions={actions} theme={styles} />
    );
  }
}

export default Navbar;
