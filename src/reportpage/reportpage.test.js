import React from 'react';
import ReactDOM from 'react-dom';
import Reportpage from './reportpage.js';


it('renders report page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Reportpage match={{params: {petname: 'Bento'}}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});