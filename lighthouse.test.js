const lighthouse = require('lighthouse')
const chromeLauncher = require('chrome-launcher')
const Table = require('cli-table')

const table = new Table()

const output = scores => {
  Object.keys(scores).forEach(category => {
    table.push([category, Math.round(scores[category] * 100)])
  })
  return table.toString()
}

const launchChromeAndRunLighthouse = async (url, opts = {}, config = null) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: opts.chromeFlags })
  opts.port = chrome.port

  const results = await lighthouse(url, opts, config)
  await chrome.kill()

  return results
}

let scores

beforeAll(async () => {
  const { lhr } = await launchChromeAndRunLighthouse('http://localhost:9000')
  scores = Object.keys(lhr.categories).reduce((merged, category) => {
    merged[category] = lhr.categories[category].score
    return merged
  }, {})
}, 10000)

describe(`Lighthouse Audit`, () => {
  it('Performance score above 92', () => {
    expect(scores.performance).toBeGreaterThanOrEqual(0.93)
  })
  it('Accessibility score above 92', () => {
    expect(scores.accessibility).toBeGreaterThanOrEqual(0.93)
  })
  it('Best Practices score above 92', () => {
    expect(scores['best-practices']).toBeGreaterThanOrEqual(0.93)
  })
  it('SEO score above 92', () => {
    expect(scores.seo).toBeGreaterThanOrEqual(0.93)
  })
})

afterAll(() => {
  console.log(output(scores))
})
