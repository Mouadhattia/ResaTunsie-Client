import Head from "next/head";
import React from "react";
import ScrollProgrssBtn from "../common/ScrollProgrssBtn";
import Footer1 from "../footer/Footer1";
import Header1 from "../header/Header1";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Resa Tunisie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/icons/logo-icon.svg" />
      </Head>
      <ScrollProgrssBtn />
      <Header1 />
      {children}
  
      <Footer1 />
    </>
  );
}

export default Layout;
