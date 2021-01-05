import React from 'react';
import ReactDOM from 'react-dom';
import Datapage from './datapage.js';


it('renders Data page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Datapage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
