import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import "./index.scss";
import "../utils/reboot.scss";
import "../utils/_style.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navigation />
        {children()}
        <Footer />
      </div>
    );
  }
}
