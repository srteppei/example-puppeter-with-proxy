import { MapInterface } from '../../common'
import { ThirdPartyProxyToProxyMapper } from '../_index'
import { ProxyConfigurationToThirdPartyOptionMapper } from '../mapper/_index'

export class ProxyListMapperAssembly {
  get thirdPartyProxyToProxy() {
    return new ThirdPartyProxyToProxyMapper()
  }

  get proxyConfigurationToOptionsThirdParty() {
    return new ProxyConfigurationToThirdPartyOptionMapper()
  }
}
