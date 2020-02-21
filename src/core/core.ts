import { ProxyListAssembly, BrowserAssembly } from '../lib'

export class Core {
  private _proxy: ProxyListAssembly | undefined
  private _browser: BrowserAssembly | undefined

  get proxy() {
    if (this._proxy === undefined) {
      this._proxy = new ProxyListAssembly()
    }
    return this._proxy
  }

  get browser() {
    if (this._browser === undefined) {
      this._browser = new BrowserAssembly()
    }
    return this._browser
  }
}
