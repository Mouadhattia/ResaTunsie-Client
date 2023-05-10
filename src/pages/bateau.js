import React from "react";
import BateauForm from "../components/bateau/BateauForm";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";

function Bateau() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle=""
        pageDetails="Bateau"
        IMG="/assets/images/bg/bateau1.jpg"
      />

      <BateauForm />
    </Layout>
  );
}

export default Bateau;
