import puppeteer, { Browser, DirectNavigationOptions, Page, ResourceType } from 'puppeteer'

import { Configuration } from './types'

async function loadConfig() {
  const { default: config } = await import('../config').catch(() =>
    import('../config.default')
  )
  return config as Configuration
}

export default async function initialize({ useBrowser = true } = {}) {
  const config = await loadConfig()

  const date = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '')

  let browser = undefined as Browser
  let workers = undefined as Page[]

  if (useBrowser) {
    browser = await puppeteer.launch()
    workers = await Promise.all(
      Array(config.pageWorkers)
        .fill(undefined)
        .map(() => browser.newPage())
    )

    workers.forEach(async worker => {
      await worker.setRequestInterception(true)
      worker.on('request', request => {
        const types = ['font', 'image', 'stylesheet'] as ResourceType[]

        if (types.some(type => request.resourceType() === type)) {
          request.abort()
        } else {
          request.continue()
        }
      })
    })
  }

  const withBrowser = useBrowser ? { browser, workers } : {}
  const workerProps = { waitUntil: 'networkidle0' } as DirectNavigationOptions

  return { config, date, ...withBrowser, workerProps }
}
