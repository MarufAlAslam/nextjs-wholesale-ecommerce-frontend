import { Container } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us py-10">
      <Container maxWidth="xl">
        <header>
          <h1 className="text-3xl font-bold text-center mb-5">Contact Us</h1>
        </header>

        <footer className="bg-green-200 mt-5 p-10 text-center text-lg">
          <p>
            We value your feedback and inquiries. <br /> Please feel free to
            reach out to us using the contact information above or by using the
            contact form.
          </p>
        </footer>

        <section id="contact-form" className="mt-10">
          <h2 className="text-xl font-bold mb-2">Contact Form</h2>
          <form action="submit_contact_form.php" method="post">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white border my-2 rounded p-3"
              placeholder="Enter Your Name Here"
            />

            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white border my-2 rounded p-3"
              placeholder="Enter Your Email Here"
            />
            <label for="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="w-full bg-white border my-2 rounded p-3"
              placeholder="Enter Your Phone Number Here"
            />

            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full bg-white border my-2 rounded p-3 resize-none"
              placeholder="Write Your Message Here"
            ></textarea>

            <button
              type="submit"
              className="bg-[#D1323D] text-white px-14 py-3 mt-5 rounded block ml-auto"
            >
              Submit
            </button>
          </form>
        </section>
      </Container>
    </div>
  );
};

export default ContactUs;
