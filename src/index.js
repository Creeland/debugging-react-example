import React from 'react';
import Products from './components/Products/Products';

const products = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1430922080198-aa15f3a718b9?q=80&fm=jpg&s=d9b59e184e6cbda785d7f6408e412f19',
    summary: 'Ut enim ad minim',
    details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    imageSrc: 'https://images.unsplash.com/15/strum.JPG?q=80&fm=jpg&s=d0751591d184db20291b3b1cac801cea',
    summary: 'Duis aute irure',
    details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1421878512040-134f5e04e971?q=80&fm=jpg&s=3103fb9a05c425fb8b4541d05317af3e',
    summary: 'Sed do eiusmod',
    details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  }
];

React.render(<Products products={products} />, document.getElementById('app'));
