import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class Datenschutz extends React.Component {
  render() {
    return (
      <div className="datenschutz-container">
        <Helmet title={config.siteTitle} />
        <SEO />
        datenschutz
      </div>
    );
  }
}
