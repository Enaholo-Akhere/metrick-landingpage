import React from 'react';
import {
  About as AboutUsView,
  Blog as BlogView,
  Contact as ContactUsView,
  Home as ComingSoon,
} from '../views';

const Routes = [
  {
    path: '/',
    renderer: (params = {}) => <ComingSoon {...params} />,
  },
  {
    path: '/blog',
    renderer: (params = {}) => <BlogView {...params} />,
  },
  {
    path: '/contact-us',
    renderer: (params = {}) => <ContactUsView {...params} />,
  },
  {
    path: '/about-us',
    renderer: (params = {}) => <AboutUsView {...params} />,
  },
];

export default Routes;
