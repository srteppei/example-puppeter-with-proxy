import { BrowserService } from '..'
import { BrowserPuppeteerServiceImplementation } from '../_index'

export class BrowserServiceAssembly {
  private _browserService: BrowserService | undefined

  get puppeteer() {
    if (this._browserService === undefined) {
      this._browserService = new BrowserPuppeteerServiceImplementation()
    }
    return this._browserService
  }
}
