import { css } from 'styled-components'
import theme from '../../config/theme'

const COLORS = {
  white: '#f0f0f0',
  black: '#22222f',
}

const lables = [
  { lang: 'javascript', tag: 'js', bg: '#f7df1e' },
  { lang: 'css', tag: 'css', bg: '#ff9800' },
  { lang: 'scss', tag: 'scss', bg: '#ff9800' },
  { lang: 'jsx', tag: 'jsx', bg: '#61dafb' },
  { lang: 'bash', tag: 'sh' },
  { lang: 'json', tag: 'json', bg: '#8bc34a' },
  { lang: 'diff', tag: 'diff', bg: '#e6ffed' },
  { lang: 'markdown', tag: 'md', bg: 'white' },
  { lang: 'graphql', tag: 'GraphQL', bg: '#e10098', color: '#fff' },
]

const lablesStyles = lables
  .map(
    ({ lang, tag, bg = COLORS.white, color = COLORS.black }) =>
      `.lekoarts-highlight[data-language="${lang}"]::before {
      content: '${tag}';
      ${bg && `background: ${bg};`}
      ${color && `color: ${color};`}
    }`
  )
  .join(`\n`)

const prism = css`
  p > code,
  li > code {
    color: ${COLORS.white};
    background: ${COLORS.black};
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
    color: ${COLORS.white};
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
    margin-bottom: 1.5rem;
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
    background: ${COLORS.black};
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
    overflow: auto;
  }

  .lekoarts-highlight[data-language]::before {
    position: absolute;
    top: 0;
    right: 1rem;
    padding: 2px 10px;
    font-size: 0.7rem;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    border-radius: 0 0 5px 5px;
    color: ${COLORS.black};
    background: ${COLORS.white};
  }

  ${lablesStyles}
`

export default prism
