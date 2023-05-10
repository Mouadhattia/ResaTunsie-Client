import React from "react";
import BusForm from "../components/bus/BusFrom";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";


function Bus() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle=""
        pageDetails="Bus"
        IMG="/assets/images/bg/bus1.jpg"
      />

      <BusForm />
    </Layout>
  );
}

export default Bus;
