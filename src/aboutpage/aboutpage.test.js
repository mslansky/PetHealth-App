import React from 'react';
import ReactDOM from 'react-dom';
import Aboutpage from './aboutpage.js';


it('renders About page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Aboutpage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
