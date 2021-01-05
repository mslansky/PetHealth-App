import React from 'react';
import ReactDOM from 'react-dom';
import Profilepage from './profilepage.js';


it('renders profile page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Profilepage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});