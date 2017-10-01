import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const copyright = config.copyright;
    return (
      <footer className="footer">
        {copyright}
      </footer>
    );
  }
}

export default Footer;
