import React from 'react';
import './diarypage.css';


export default class Diarypage extends React.Component{
  render (){
    return(
    <div className="diarypage">

      <div className="flex">
      <img className="pictures" src="https://images.unsplash.com/photo-1552231437-c308abde4526?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="grey sleepy cat"/>
      <img className="pictures" src="https://images.unsplash.com/photo-1586410074293-91d01ca0db5c?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDd8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="black and white cat"/>
      <img className="pictures" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="corgi and brown dog running"/>
      </div>

      
      <div class="diary-card">
        <div class="card">
          <div class="card-body">
            <div class="card-content">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing 
                small bits of information.
              </p>
              </div>
              <div class="card-action">
              <a href="#">OPEN DIARY PAGE</a>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>




    </div>
    );
  }
}
