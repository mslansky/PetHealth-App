import React from 'react';
import ReactDOM from 'react-dom';
import Diarypage from './diarypage.js';

import {BrowserRouter as Router} from "react-router-dom";

it('renders Diary page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(
    <Router><Diarypage match={{params: {petname: 'Bento'}}}/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
