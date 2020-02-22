import { MapInterface } from '../../common'
import { ThirdPartyProxyToProxyMapper } from '../_index'

export class ProxyListMapperAssembly {
  get thirdPartyProxyToProxy() {
    return new ThirdPartyProxyToProxyMapper()
  }
}
