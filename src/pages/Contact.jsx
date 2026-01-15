import React from "react";

function Contact() {
  return (
    <div className="container mt-4">

      <div className="border p-4">

        <h5>CONTACT</h5>
        <p>Painter Name</p>
        <p>Email: painter@gmail.com</p>
        <p>Instagram: insta id</p>
        <p>Studio Address: Address</p>

        <hr/>

        <h5>ENQUIRY FORM</h5>

        <form>
          <input className="form-control mb-2" placeholder="Name"/>
          <input className="form-control mb-2" placeholder="Email"/>
          <input className="form-control mb-2" placeholder="Phone"/>
          <textarea className="form-control mb-2" placeholder="Message"></textarea>
          <button className="btn btn-dark">Send Enquiry</button>
        </form>

      </div>

    </div>
  );
}

export default Contact;
