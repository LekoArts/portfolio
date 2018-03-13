import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import Navigation from '../components/Navigation/Navigation';
import config from '../../data/SiteConfig';
import '../utils/reboot.scss';
import '../utils/_style.scss';

export default class MainLayout extends React.Component {
  componentDidMount() {
    const html = document.documentElement;
    function changeTheme() {
      const date = new Date();
      const hr = date.getHours();
      const morning = 7;
      const evening = 20;
      if (hr > morning && hr < evening) {
        html.classList.remove('night');
      }
      if (hr >= evening) {
        html.classList.add('night');
      }
      if (hr >= 0 && hr <= morning) {
        html.classList.add('night');
      }
    }
    changeTheme();
  }
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Helmet>
          <html lang="de" />
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <SEO />
        <Navigation />
        {children()}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.func.isRequired,
};
