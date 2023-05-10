import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import InfoSection from "../components/contact/InfoSection";
import Layout from "../components/layout/Layout";

function Contact() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Entrer en contact"
        pageDetails="Discutons ensemble"
        IMG="https://cvv.tn/images/2.jpg"
      />
      <InfoSection />
      <ContactForm />
    </Layout>
  );
}

export default Contact;
