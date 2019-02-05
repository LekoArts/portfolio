import { css } from 'styled-components'
import theme from '../../config/theme'

const prism = css`
  p > code,
  li > code {
    color: #f8f8f2;
    background: #22222f;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
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

  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }

  pre[class*='language-'] {
    padding: 2em 1em;
    margin: 1.5rem 0;
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

  pre[class*='language-'] {
    background: #22222f;
  }

  p > code[class*='language-'],
  li > code[class*='language-'] {
    border-radius: 0.3em;
    background: rgba(52, 152, 219, 0.2);
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

  .lekoarts-highlight {
    position: relative;

    pre[class*='language-'] {
      -webkit-overflow-scrolling: touch;
    }

    pre[class*='language-']::before {
      position: absolute;
      top: 0;
      right: 1rem;
      padding: 2px 10px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      border-radius: 0 0 5px 5px;
      color: #22222f;
      background: #f0f0f0;
    }

    pre[class='language-javascript']::before {
      content: 'js';
      background: #f7df1e;
    }

    pre[class='language-css']::before {
      content: 'css';
      background: #ff9800;
      font-weight: 400;
    }

    pre[class='language-scss']::before {
      content: 'scss';
      background: #ff9800;
      font-weight: 400;
    }

    pre[class='language-jsx']::before {
      content: 'jsx';
      background: #61dafb;
    }

    pre[class='language-bash']::before {
      content: 'sh';
    }

    pre[class='language-json']::before {
      content: 'json';
      background: #8bc34a;
    }

    pre[class='language-diff']::before {
      content: 'diff';
      background: #e6ffed;
    }

    pre[class='language-markdown']::before {
      content: 'md';
      background: white;
    }

    pre[class='language-graphql']::before {
      content: 'GraphQL';
      background: #e10098;
      color: #fff;
      font-weight: 400;
    }
  }
`

export default prism
