import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import Navigation from '../components/Navigation/Navigation';
import '../fonts/inter-ui.css';

const MainLayout = props => {
  const { children } = props;
  return (
    <div className="layout">
      <Head />
      <Navigation />
      {children()}
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.func.isRequired,
};
