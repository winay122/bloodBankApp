import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Blood donation is a selfless and impactful act that holds the power
            to save lives. Every drop of donated blood becomes a lifeline for
            individuals facing medical emergencies, surgeries, or chronic
            illnesses. The importance of voluntary blood donation cannot be
            overstated, as it ensures a steady and safe supply of blood for
            hospitals and medical facilities. This altruistic endeavor is driven
            by individuals motivated by compassion, community spirit, and a
            shared commitment to the well-being of others. Through organized
            donation drives and community engagement, people from all walks of
            life come together to contribute to a cause that transcends personal
            boundaries. Beyond its life-saving impact, blood donation also holds
            health benefits for donors, promoting a sense of shared
            responsibility for the collective health and welfare of the
            community. Regular blood donations, supported by education and
            awareness initiatives, form the cornerstone of a robust healthcare
            system, embodying the principle that small individual acts can
            collectively make a profound and positive difference in the lives of
            many.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
