import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy py-10">
      <Container maxWidth="xl">
        <header>
          <h1 className="text-center text-3xl font-bold mb-5">
            Privacy Policy
          </h1>
        </header>

        <section id="introduction">
          <h2 className="text-xl font-bold mb-2">Welcome to Wholesale</h2>
          <p className="mb-5">
            This privacy policy outlines how Wholesale collects, uses, and
            protects your personal information. By using our website and
            services, you agree to the terms of this policy. If you do not agree
            with our privacy practices, please do not continue to use our
            services.
          </p>
        </section>

        <section id="information-collected">
          <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
          <p className="mb-3">
            We may collect various types of information, including but not
            limited to:
          </p>
          <ul className="list-decimal list-inside mb-5">
            <li>
              Personal information (such as name, email address, and contact
              details) that you provide when contacting us or using our
              services.
            </li>
            <li>
              Usage data, including information about your interactions with our
              website and services.
            </li>
            <li>
              Device and browser information for analytics and security
              purposes.
            </li>
          </ul>
        </section>

        <section id="how-we-use">
          <h2 className="text-xl font-bold mb-2">
            How We Use Your Information
          </h2>
          <p className="mb-3">
            We use your information for the following purposes:
          </p>
          <ul className="list-decimal list-inside mb-5">
            <li>
              To provide and improve our services, including personalizing your
              experience.
            </li>
            <li>To communicate with you and respond to your inquiries.</li>
            <li>
              To analyze usage patterns and improve our website and services.
            </li>
            <li>
              To comply with legal obligations and protect our rights and
              interests.
            </li>
          </ul>
        </section>

        <section id="third-party">
          <h2 className="text-xl font-bold mb-2">
            Third-Party Links and Services
          </h2>
          <p className="mb-5">
            Our website may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of these
            third parties. We encourage you to review the privacy policies of
            any third-party sites you visit.
          </p>
        </section>

        <section id="data-security">
          <h2 className="text-xl font-bold mb-2">Data Security</h2>
          <p className="mb-5">
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, or alteration. However, no method
            of transmission over the internet or electronic storage is entirely
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section id="policy-changes">
          <h2 className="text-xl font-bold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-5">
            We reserve the right to update or modify this privacy policy at any
            time. Any changes will be reflected on this page, and the date of
            the last revision will be updated below.
          </p>
        </section>

        <footer>
          <p className="mb-5">
            If you have any questions or concerns about our privacy policy,
            please&nbsp;
            <Link
              className="text-[#D3313D] font-bold text-lg underline"
              href={"/contact-us"}
            >
              contact us
            </Link>
            .
          </p>
          <p>Last Updated: &nbsp;
            <span className="text-[#D3313D] font-bold text-lg">16/09/2023</span></p>
        </footer>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
