import { ProxyListAssembly } from '../lib'

export class Core {
  private _proxy: ProxyListAssembly | undefined

  get proxy() {
    if (this._proxy === undefined) {
      this._proxy = new ProxyListAssembly()
    }
    return this._proxy
  }
}
