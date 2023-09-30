import React from 'react';

export default function Contact() {
  return (
    <div>
      <label for="name">Name</label>
       <input id="name" placeholder="name" class="form-control" /> 
       <br/>

  <label for="floatingTextarea">Message</label>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <button>Email</button>
</div>
  );
}
