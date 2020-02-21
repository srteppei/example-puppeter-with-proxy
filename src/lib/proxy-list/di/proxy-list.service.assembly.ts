import { GetProxyListService, GetProxyListServiceImplementation } from '..'

export class ProxyListServiceAssembly {
  private _getProxyListService: GetProxyListService | undefined

  get getProxyList() {
    if (this._getProxyListService === undefined) {
      this._getProxyListService = new GetProxyListServiceImplementation()
    }
    return this._getProxyListService
  }
}
