import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import Navigation from "../components/Navigation/Navigation";
import config from "../../data/SiteConfig";
import "../utils/reboot.scss";
import "../utils/_style.scss";
import "../utils/lekoarts";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Helmet title={config.siteTitle} />
        <SEO />
        <Navigation />
        {children()}
      </div>
    );
  }
}
