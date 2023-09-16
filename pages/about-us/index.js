import { Container } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us py-10">
      <Container maxWidth="xl">
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-5">About Us</h1>
        </header>

        <section id="vision">
          <h2 className="text-xl font-bold mb-2">Our Vision</h2>
          <p className="mb-5">
            Our vision is simple yet profound - to redefine wholesale by
            embracing innovation, leveraging technology, and fostering strong
            relationships. We envision a future where businesses can access a
            diverse range of high-quality products with ease, all while enjoying
            the benefits of a seamless wholesale process.
          </p>
        </section>

        <section id="who-we-are">
          <h2 className="text-xl font-bold mb-2">Who We Are</h2>
          <p className="mb-5">
            We are a team of dedicated professionals, each bringing unique
            expertise to the table. From seasoned industry veterans to
            tech-savvy innovators, our diverse backgrounds come together to
            create a dynamic force focused on delivering exceptional wholesale
            solutions.
          </p>
        </section>

        <section id="what-we-offer">
          <h2 className="text-xl font-bold mb-2">What We Offer</h2>
          <ul className="list-decimal list-inside mb-5">
            <li>
              Extensive Product Selection: Access a wide array of products
              across various categories, ensuring that you can find what you
              need.
            </li>
            <li>
              Effortless Ordering: Our intuitive platform makes ordering a
              breeze, saving you time and effort.
            </li>
            <li>
              Competitive Pricing: Benefit from competitive wholesale pricing
              that helps you maintain healthy profit margins.
            </li>
            <li>
              Reliable Delivery: We understand the importance of timely
              deliveries. Count on us for efficient shipping and dependable
              service.
            </li>
            <li>
              Dedicated Support: Our customer support team is always ready to
              assist you, ensuring a smooth and hassle-free experience.
            </li>
          </ul>
        </section>

        <section id="why-choose-us">
          <h2 className="text-xl font-bold mb-2">Why Choose Us</h2>
          <ul className="list-decimal list-inside mb-5">
            <li>
              Quality Assurance: We are committed to providing products of the
              highest quality, sourced from reputable suppliers.
            </li>
            <li>
              Innovation: We continually invest in technology and processes to
              simplify wholesale procurement for our clients.
            </li>
            <li>
              Transparency: We believe in transparency in all our dealings, from
              pricing to product information.
            </li>
            <li>
              Customer-Centric Approach: Your success is our success. We are
              here to support your business growth.
            </li>
          </ul>
        </section>

        <footer>
          <p>
            Join us on our journey to revolutionize wholesale, streamline your
            operations, and boost your profitability. Discover the difference
            that <strong>Wholesale</strong> can make for your wholesale
            business today.
          </p>
          <p>Thank you for considering us as your wholesale partner.</p>
        </footer>
      </Container>
    </div>
  );
};

export default AboutUs;
