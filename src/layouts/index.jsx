import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./index.scss";
import "../utils/reboot.scss";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Kategorien";
    } else if (currentPath.includes("posts")) {
      title = "Beitrag";
    } else if (currentPath.includes("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Markiert in ${capitalize(tag)}`;
    } else if (currentPath.includes("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navigation />
        {children()}
        <Footer />
      </div>
    );
  }
}
