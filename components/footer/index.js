import { Container } from "@mui/material";
import React from "react";
import logo from "../../src/assets/img/logo.webp";

import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pt-[40px] pb-5 border-t text-white border-white">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="col-span-1">
            <div className="flex flex-col items-start gap-2">
              <Image src={logo} alt="logo" className="w-[100px]" />
              <p className="text-white flex">
                wholesale is a leading online shopping platform in Bangladesh.
                It offers a convenient and seamless shopping experience to users
                who are looking to shop anytime, anywhere. With strong payment
                and logistical support, wholesale provides all users with a safe
                and secure online shopping environment.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-xl font-bold">Quick Links</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-xl font-bold">Categories</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">Car Accessories</Link>
                </li>
                <li>
                  <Link href="#">Car Care</Link>
                </li>
                <li>
                  <Link href="#">Car Electronics</Link>
                </li>
                <li>
                  <Link href="#">Car Parts</Link>
                </li>
                <li>
                  <Link href="#">Car Tools</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-xl font-bold">Contact Us</h2>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-2" />
                <p>Address: 123, Lorem Ipsum, Dolor Sit Amet, Bangladesh</p>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <p>Phone: +880 1234567890</p>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope />
                <p>
                  Email:
                  <a href="mailto:test@test.com">test@test.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <hr className="text-white mb-4" />
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Link href="https://facebook.com">
                <FaFacebook className="text-2xl" />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram className="text-2xl" />
              </Link>
              <Link href="https://linkedin.com">
                <FaLinkedinIn className="text-2xl" />
              </Link>
              <Link href="https://youtube.com">
                <FaYoutube className="text-2xl" />
              </Link>
            </div>

            <p className="text-sm">© 2023 Wholesale. All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
