import { GetProxyListService, GetProxyListServiceImplementation, ProxyListMapperAssembly } from '..'

export class ProxyListServiceAssembly {
  private _getProxyListService: GetProxyListService | undefined

  constructor(private proxyListMapperAssembly: ProxyListMapperAssembly) {}

  get getProxyList() {
    if (this._getProxyListService === undefined) {
      this._getProxyListService = new GetProxyListServiceImplementation(
        this.proxyListMapperAssembly.thirdPartyProxyToProxy,
        this.proxyListMapperAssembly.proxyConfigurationToOptionsThirdParty
      )
    }
    return this._getProxyListService
  }
}
