import React from 'react';
import ReactDOM from 'react-dom';
import Createprofile from './createprofile.js';


it('renders Create Profile page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Createprofile/>, div);
  ReactDOM.unmountComponentAtNode(div);
});