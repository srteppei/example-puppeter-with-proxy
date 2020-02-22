import { launch, Browser, LaunchOptions } from 'puppeteer'
import { BrowserService } from '..'
import { Proxy } from '../../../proxy-list'

export class BrowserPuppeteerServiceImplementation implements BrowserService {
  async launch(proxy?: Proxy): Promise<Browser> {
    return new Promise((resolve, reject) => {
      const launchOptions: LaunchOptions = {
        headless: false,
        args: [],
      }

      if (proxy !== undefined && proxy !== null) {
        if (proxy.protocolList !== undefined) {
          const domain = `${proxy.protocolList[0]}://${proxy.ip}:${proxy.port}`
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
