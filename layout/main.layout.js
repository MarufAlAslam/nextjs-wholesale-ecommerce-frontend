// components/Layout.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <>
        <Header/>
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer/>
    </>
  );
};

export default Layout;