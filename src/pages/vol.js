import React from "react";
import BateauForm from "../components/bateau/BateauForm";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import VolForm from "../components/vol/VolForm";

function Vol() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle=""
        pageDetails="Vol"
        IMG="/assets/images/bg/vol.jpg"
      />

      <VolForm />
    </Layout>
  );
}

export default Vol;
