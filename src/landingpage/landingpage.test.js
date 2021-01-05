
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './landingpage.js';


it('renders landing page without crashing', () => {
  
  const div = document.createElement('div');

  
  ReactDOM.render(<Navbar/>, div);
  ReactDOM.unmountComponentAtNode(div);
});