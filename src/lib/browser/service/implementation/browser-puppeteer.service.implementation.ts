import { Proxy } from 'proxy-lists'
import { launch, Browser, LaunchOptions } from 'puppeteer'
import { BrowserService } from '..'

export class BrowserPuppeteerServiceImplementation implements BrowserService {
  async launch(proxy?: Proxy): Promise<Browser> {
    return new Promise((resolve, reject) => {
      const launchOptions: LaunchOptions = {
        headless: false,
        args: [],
      }

      if (proxy !== undefined && proxy !== null) {
        if (proxy.protocols !== undefined) {
          const domain = `${proxy.protocols[0]}://${proxy.ipAddress}:${proxy.port}`
          console.log(domain)
          launchOptions.args!.push(`--proxy-server=${domain}`)
        }
      }
      console.log(launchOptions)
      launch(launchOptions)
        .then(browser => resolve(browser))
        .catch(error => reject(error))
    })
  }
}
