import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

const TermsConditions = () => {
  return (
    <div className="terms-conditions py-10">
      <Container maxWidth="xl">
        <header>
          <h1 className="text-3xl font-bold text-center mb-5">
            Terms and Conditions
          </h1>
        </header>

        <section id="introduction">
          <h2 className="text-xl font-bold mb-2">Welcome to Wholesale</h2>
          <p className="mb-5">
            These terms and conditions outline the rules and regulations for the
            use of Wholesales website, located at [Your Website URL]. By
            accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Wholesale if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>
        </section>

        <section id="intellectual-property">
          <h2 className="mb-2 font-bold text-xl">
            Intellectual Property Rights
          </h2>
          <p className="mb-5">
            Other than the content you own, under these terms, [Your Company
            Name] and/or its licensors own all the intellectual property rights
            and materials contained in this website. You are granted limited
            license only for purposes of viewing the material contained on this
            website.
          </p>
        </section>

        <section id="restrictions">
          <h2 className="mb-2 font-bold text-xl">Restrictions</h2>
          <p className="mb-3">
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-decimal list-inside mb-5">
            <li>publishing any website material in any other media;</li>
            <li>
              selling, sublicensing, and/or otherwise commercializing any
              website material;
            </li>
            <li>publicly performing and/or showing any website material;</li>
            <li>
              using this website in any way that is or may be damaging to this
              website;
            </li>
            <li>
              using this website in any way that impacts user access to this
              website;
            </li>
            <li>
              using this website contrary to applicable laws and regulations, or
              in any way that may cause harm to the website, or to any person or
              business entity;
            </li>
            <li>
              engaging in any data mining, data harvesting, data extracting, or
              any other similar activity in relation to this website;
            </li>
            <li>
              certain areas of this website are restricted from being accessed
              by you, and Wholesale may further restrict access by you to any
              areas of this website, at any time, in absolute discretion.
            </li>
          </ul>
        </section>

        <section id="your-content">
          <h2 className="mb-2 font-bold text-xl">Contents</h2>
          <p className="mb-5">
            In these website standard terms and conditions, Our Content shall
            mean any audio, video, text, images, or other material you choose to
            display on this website. By displaying Your Content, you grant [Your
            Company Name] a non-exclusive, worldwide irrevocable, sub-licensable
            license to use, reproduce, adapt, publish, translate, and distribute
            it in any and all media.
          </p>
        </section>

        <section id="termination">
          <h2 className="mb-2 font-bold text-xl">Termination</h2>
          <p className="mb-5">
            We may terminate or suspend access to our website immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach these terms and
            conditions. All provisions of these terms and conditions shall
            survive termination, including, without limitation, ownership
            provisions, warranty disclaimers, indemnity, and limitations of
            liability.
          </p>
        </section>

        <section id="changes">
          <h2 className="mb-2 font-bold text-xl">
            Changes to These Terms and Conditions
          </h2>
          <p className="mb-5">
            We reserve the right to modify these terms and conditions at any
            time. By using this website, you are expected to review these terms
            and conditions regularly.
          </p>
        </section>

        <footer>
          <p>
            If you have any questions about these terms and conditions, please &nbsp;
            <Link className="text-[#D3313D] font-bold text-lg underline" href={"/contact-us"}>contact us</Link>.
          </p>
        </footer>
      </Container>
    </div>
  );
};

export default TermsConditions;
