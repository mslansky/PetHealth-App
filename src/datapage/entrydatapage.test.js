import React from 'react';
import ReactDOM from 'react-dom';
import Entrydatapage from './entrydatapage.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Entry Data page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><Entrydatapage/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
