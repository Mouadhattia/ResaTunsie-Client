import React from "react";

import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import VisaForm from "../components/visa/VisaForm";

function Visa() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle=""
        pageDetails="Visa"
        IMG="/assets/images/bg/visa.jpg"
      />

      <VisaForm />
    </Layout>
  );
}

export default Visa;
