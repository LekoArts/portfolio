import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class Impressum extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title={config.siteTitle} />
        <SEO />
        Test 123
      </div>
    );
  }
}
