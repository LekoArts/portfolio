/* eslint no-unused-expressions: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import 'typeface-montserrat';
import 'typeface-istok-web';
import { SEO } from 'elements';
import Navigation from '../components/Navigation';
import theme from '../../config/theme';

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: ${theme.breakpoints.m}) and (max-device-width: ${theme.breakpoints.m}) {
      font-size: 16px !important;
      h1 {
        font-size: 2.074rem;
      }
      h2 {
        font-size: 1.728rem;
      }
      h3 {
        font-size: 1.44rem;
      }
      h4 {
        font-size: 1.2rem;
      }
    }
    @media (max-width: ${theme.breakpoints.s}) and (max-device-width: ${theme.breakpoints.s}) {
      font-size: 14px !important;
      h1 {
        font-size: 1.602rem;
      }
      h2 {
        font-size: 1.424rem;
      }
      h3 {
        font-size: 1.266rem;
      }
      h4 {
        font-size: 1.125rem;
      }
    }
  }
  body {
    color: ${theme.colors.black.base};
    background-color: ${theme.colors.white.light};
  }
  ::selection {
    color: ${theme.colors.white.base};
    background-color: ${theme.colors.primary.base};
  }
  a {
    color: ${theme.colors.primary.base};
    transition: ${theme.transitions.default.transition};
    text-decoration: none;
    &:hover, &:focus {
      color: ${theme.colors.primary.light};
    }
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover, &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1 {
    text-shadow: ${theme.shadow.text.big};
  }
  h2 {
    text-shadow: ${theme.shadow.text.small};
  }
  blockquote {
    border-left: 5px solid ${theme.colors.primary.base};
    padding-left: 1rem !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    font-style: italic;
    p {
      line-height: 1.3 !important;
    }
  }
  .gatsby-resp-image-wrapper {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-radius: ${theme.borderRadius.default};
    .gatsby-resp-image-background-image, .gatsby-resp-image-image {
      border-radius: ${theme.borderRadius.default};
    }
  }
  .gatsby-resp-iframe-wrapper {
    margin-bottom: 2rem;
  }
  [tabindex="-1"]:focus {
    outline: none !important;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role="button"] {
    cursor: pointer;
  }
  a, area, button, [role="button"], input, label, select, summary, textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${theme.colors.white.base};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${theme.colors.white.light};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  input, button, select, textarea {
    line-height: inherit;
  }
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type="search"] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  [hidden] {
    display: none !important;
  }
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
  }
  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 1rem 1.5rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.white.base};
      }
    }
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--scrolled {
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background-color: ${theme.colors.white.light};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    nav {
      a {
        color: ${theme.colors.black.base};
        &:hover {
          border-color: ${theme.colors.black.base};
          color: ${theme.colors.black.base};
        }
        &:focus {
          color: ${theme.colors.black.base};
        }
      }
    }
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.black.base};
      }
    }
    span {
      color: ${theme.colors.black.base};
    }
  }
  .gatsby-highlight {
    margin: 1.5rem -1rem;
  }
  p > code,
  li > code {
    color: #f8f8f2;
    background: #131316;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    padding: 0.4em 0.5em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
    tab-size: 4;
    hyphens: none;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }

  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary.base};
    }
    &::-webkit-scrollbar-track {
      background: ${theme.colors.black.light};
    }
    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #131316;
  }

  :not(pre) > code[class*="language-"] {
    border-radius: 0.3em;
    background: rgba(52,152,219,0.2);
    color: #2e3246;
    bottom: 2px;
    position: relative;
  }

  .token.operator {
    color: #bc78d7;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #56b6c2;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #f92672;
  }
  .token.boolean,
  .token.number {
    color: #ae81ff;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #7cc379;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }
  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #e6db74;
  }
  .token.keyword {
    color: #66d9ef;
  }
  .token.regex,
  .token.important {
    color: #fd971f;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <SEO />
      <Navigation />
      {children}
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
