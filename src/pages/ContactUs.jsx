import React, { useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2rii5tj",
        "template_i6x0dsu",
        form.current,
        "QxVL45T4DGRgu04uJ"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="container py-5">

      <div className="row g-4">

        {/* CONTACT FORM CARD */}
        <div className="col-md-6">
          <div className="card shadow border-0 p-4 h-100">

            <h2 className="fw-bold mb-4">
              GET IN TOUCH
            </h2>

            <form ref={form} onSubmit={sendEmail}>

              {/* NAME */}
              <div className="mb-3">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* SUBJECT */}
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Enter your subject"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="send-btn btn-info w-50 text-success fw-semibold"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
        

        {/* CONTACT INFO CARD */}
        <div className="col-md-6">
          <div className="card shadow border-0 p-4 h-100">

            <h2 className="fw-bold mb-4">
              CONTACT INFO
            </h2>

            {/* ADDRESS */}
            <div className="d-flex align-items-start gap-3 mb-4">
              <FaMapMarkerAlt className="text-danger fs-4 mt-1" />

              <div>
                <h5 className="fw-semibold">
                  Address
                </h5>

                <p className="text-secondary mb-0">
                  No 10 Nza Street, Independent Layout, Enugu,
                  Enugu State, Nigeria
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="d-flex align-items-start gap-3 mb-4">
              <FaPhoneAlt className="text-success fs-4 mt-1" />

              <div>
                <h5 className="fw-semibold">
                  Phone Number
                </h5>

                <p className="text-secondary mb-0">
                  +234 806 441 0162
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="d-flex align-items-start gap-3">
              <FaEnvelope className="text-primary fs-4 mt-1" />

              <div>
                <h5 className="fw-semibold">
                  Email Address
                </h5>

                <p className="text-secondary mb-0">
                  doggedugo@gmail.com
                </p>
              </div>
            </div>

          </div>
        </div>

          {/* EMBEDDED MAP */}
        <div className="container my-5">

        <div className="card shadow border-0 overflow-hidden">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.566146814388!2d7.5184246739742875!3d6.449703924018608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3f7406eee01%3A0x1df6752df6e9288e!2sBeyond%20Hotels!5e0!3m2!1sen!2sng!4v1779573775212!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Beyond Hotels Location"
          ></iframe>

        </div>

      </div>
        
      </div>
      
    </div>
    
  );
}

export default ContactUs;