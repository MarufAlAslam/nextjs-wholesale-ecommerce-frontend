import { Container } from "@mui/material";
import React from "react";

const BuyingGuide = () => {
  return (
    <div className="buying-guide py-10">
      <Container maxWidth="xl">
        <header>
          <h1 className="mb-5 text-3xl font-bold text-center">Buying Guide</h1>
        </header>

        <section id="intro">
          <h2 className="mb-2 text-xl font-bold">Welcome to Our Buying Guide</h2>
          <p className="mb-5">
            At Wholesale, we want to make your purchasing decisions
            easier. Whether youre a first-time buyer or a seasoned pro, our
            buying guide is here to help you make informed choices. Explore the
            tips and advice below to ensure you find the perfect products for
            your needs.
          </p>
        </section>

        <section id="research">
          <h2 className="text-xl font-bold mb-2">1. Research Your Needs</h2>
          <p className="mb-5">
            Start by identifying your specific requirements. What problem are
            you trying to solve, or what need are you addressing? Understanding
            your needs is the first step toward making a smart purchase.
          </p>
        </section>

        <section id="compare">
          <h2 className="font-bold text-xl mb-2">2. Compare Products</h2>
          <p className="mb-5">
            Once you know what youre looking for, compare different products or
            options available in the market. Consider factors like features,
            specifications, pricing, and customer reviews to narrow down your
            choices.
          </p>
        </section>

        <section id="budget">
          <h2 className="text-xl font-bold mb-2">3. Set a Budget</h2>
          <p className="mb-5">
            Establish a budget that aligns with your financial capacity. Its
            essential to strike a balance between affordability and quality.
            Avoid overspending by sticking to your budget.
          </p>
        </section>

        <section id="reviews">
          <h2 className="text-xl font-bold mb-2">4. Read Reviews</h2>
          <p className="mb-5">
            Take advantage of customer reviews and expert opinions. Reading
            reviews can provide valuable insights into the real-world
            performance and satisfaction levels of products.
          </p>
        </section>

        <section id="questions">
          <h2 className="text-xl font-bold mb-2">5. Ask Questions</h2>
          <p className="mb-5">
            If you have any doubts or questions about a product, dont hesitate
            to reach out to our customer support team. Were here to provide you
            with the information you need to make an informed decision.
          </p>
        </section>

        <section id="purchase">
          <h2 className="text-xl font-bold mb-2">6. Make Your Purchase</h2>
          <p className="mb-5">
            Once youve done your research, compared options, and feel confident
            in your choice, proceed to make your purchase through our secure
            online platform. We offer hassle-free transactions for your
            convenience.
          </p>
        </section>

        <footer>
          <p>
            Thank you for choosing Wholesale as your trusted source
            for high-quality products. We hope our buying guide has been helpful
            in your decision-making process. If you have any further questions
            or need assistance, please dont hesitate to{" "}
            <a href="contact.html">contact us</a>.
          </p>
        </footer>
      </Container>
    </div>
  );
};

export default BuyingGuide;
