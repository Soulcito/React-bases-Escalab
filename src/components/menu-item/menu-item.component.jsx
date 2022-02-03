import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

//history y match son props que me provee withRouter
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <p>Hello am MenuItem</p>
);

export default withRouter(MenuItem);
