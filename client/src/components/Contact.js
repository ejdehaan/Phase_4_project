import React /*,  { useState }*/ from "react";

const Contact = () => {

  return (
    <div className="height">
      <form className='form'>
        <div>
        <h3>Email Us Your Questions/Comments</h3>
          <label htmlFor="name">Name:  </label>
          <input type="text" id="name" required />
        </div>
        <br></br>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" required />
        </div>
        <br></br>
        <div>
          <label htmlFor="message">Message:  </label>
          <textarea id="message" required />
        </div>
        <br></br>
        <button className="box3" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;