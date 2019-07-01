const { RichText } = require('prismic-dom')
const Prism = require('prismjs')
const _ = require('lodash')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-json')
require('prismjs/components/prism-diff')
require('prismjs/components/prism-markdown')
require('prismjs/components/prism-graphql')

const { Elements } = RichText

// Arrays of the labels I use on Prismic.io
const codeInline = ['text']
const codeBlock = ['javascript', 'css', 'scss', 'jsx', 'bash', 'json', 'diff', 'markdown', 'graphql']

const htmlSerializer = (type, element, content) => {
  switch (type) {
    case Elements.label: {
      if (codeInline.includes(element.data.label)) {
        return `<code class="language-${element.data.label}">${content}</code>`
      }
      if (element.data.label === 'quote') {
        return `<blockquote><p>${content}</p></blockquote>`
      }
      if (codeBlock.includes(element.data.label)) {
        return `<pre class="language-${element.data.label}"><code class="language-${
          element.data.label
        }">${Prism.highlight(content, Prism.languages[element.label])}</code></pre>`
      }
      return null
    }
    case Elements.preformatted: {
      if (codeBlock.includes(element.label)) {
        return `<div class="lekoarts-highlight" data-language="${element.label}"><pre class="language-${
          element.label
        }"><code class="language-${element.label}">${Prism.highlight(
          element.text,
          Prism.languages[element.label]
        )}</code></pre></div>`
      }
      return null
    }
    case Elements.heading2: {
      return `<h2 id="${_.kebabCase(element.text)}"><a href="#${_.kebabCase(element.text)}" aria-label="${
        element.text
      } permalink" class="anchor">#</a>${element.text}</h2>`
    }
    case Elements.heading3: {
      return `<h3 id="${_.kebabCase(element.text)}"><a href="#${_.kebabCase(element.text)}" aria-label="${
        element.text
      } permalink" class="anchor">#</a>${element.text}</h3>`
    }
    case Elements.heading4: {
      return `<h4 id="${_.kebabCase(element.text)}"><a href="#${_.kebabCase(element.text)}" aria-label="${
        element.text
      } permalink" class="anchor">#</a>${element.text}</h4>`
    }
    default: {
      return null
    }
  }
}

module.exports = htmlSerializer
